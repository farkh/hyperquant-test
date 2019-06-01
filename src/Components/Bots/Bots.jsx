import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import BotItem from './BotItem';
import AddBotModal from '../AddBotModal/AddBotModal';
import BotActionsModal from '../BotActionsModal/BotActionsModal';
import ConnectionArrows from '../ConnectionArrows/ConnectionArrows';

import { addBot, removeBot } from '../../Redux/actions/botsActions';
import { getNeighborsIndexes } from '../../utils/bot.utils';
import './scss/_bots.scss';

class Bots extends Component {
	static propTypes = {
		addBot: PropTypes.func.isRequired,
		removeBot: PropTypes.func.isRequired,
	};

	state = {
		clickedIndex: null,

		showAddBotModal: false,
		showBotActionsModal: false,
		visibleArrowsIndexes: [],
		usedBots: [],
	};

	componentDidMount() {
		const { botsReducerState } = this.props;
		const { usedBots } = botsReducerState;
		this.setState({ usedBots }, this.checkMegabotNeighbors);
	}

	componentWillReceiveProps(nextProps) {
		const { botsReducerState } = nextProps;
		const { usedBots } = botsReducerState;
		this.setState({ usedBots }, this.checkMegabotNeighbors);
	}

	checkMegabotNeighbors = () => {
		const { usedBots } = this.state;
		const { botsReducerState } = this.props;
		const { megabotIndex } = botsReducerState;

		// 0 = false -> check for null specifically
		if (megabotIndex === null) {
			this.setState({ visibleArrowsIndexes: [] });
			return;
		}

		const neighborsIndexes = getNeighborsIndexes(megabotIndex);
		const { arrowIndexes, botIndexes } = neighborsIndexes;
		const visibleArrowsIndexes = [];

		for (let i = 0; i < botIndexes.length; i++) {
			if (!_.isEmpty(usedBots[botIndexes[i]])) {
				visibleArrowsIndexes.push(arrowIndexes[i]);
			}
		}

		this.setState({ visibleArrowsIndexes });
	};

	handleClickBotItem = (index, name = null) => {
		this.setState({ clickedIndex: index });

		if (!name) {
			this.handleShowAddBotModal();
			return;
		}
		
		this.handleShowBotActionsModal();
	};

	handleShowBotActionsModal = () => {
		this.handleCloseAddBotModal();
		this.setState({ showBotActionsModal: true });
	};

	handleCloseBotActionsModal = () => {
		this.setState({ showBotActionsModal: false });
	};
	
	handleShowAddBotModal = () => {
		this.handleCloseBotActionsModal();
		this.setState({ showAddBotModal: true });
	};

	handleCloseAddBotModal = () => {
		this.setState({ showAddBotModal: false });
	};
	
	render() {
		const { botsReducerState } = this.props;
		const {
			showAddBotModal, clickedIndex, showBotActionsModal, visibleArrowsIndexes, usedBots,
		} = this.state;
		const { activeBotIndex } = botsReducerState;

		return (
			<div className="dashboard__bots bots">
				{usedBots && usedBots.length > 0 && usedBots.map((bot, index) => {
					return (
						<BotItem
							key={index}
							index={index}
							uses={!_.isEmpty(bot)}
							isActive={activeBotIndex === index}
							day={bot["24h"]}
							week={bot["7d"]}
							month={bot["30d"]}
							threeMonths={bot["90d"]}
							allTime={bot.all_time}
							cost={bot.cost}
							name={bot.name}
							onClick={this.handleClickBotItem}
						/>
					);
				})}

				<AddBotModal
					show={showAddBotModal}
					onClose={this.handleCloseAddBotModal}
					index={clickedIndex}
				/>

				<BotActionsModal
					show={showBotActionsModal}
					onClose={this.handleCloseBotActionsModal}
					index={clickedIndex}
					isActive={clickedIndex === activeBotIndex}
				/>

				<ConnectionArrows visibleArrowsIndexes={visibleArrowsIndexes} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	botsReducerState: state.usedBots,
});

export default connect(mapStateToProps, { addBot, removeBot })(Bots);
