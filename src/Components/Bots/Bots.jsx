import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import BotItem from './BotItem';
import AddBotModal from '../AddBotModal/AddBotModal';
import BotActionsModal from '../BotActionsModal/BotActionsModal';

import { addBot, removeBot } from '../../Redux/actions/botsActions';
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
		const { showAddBotModal, clickedIndex, showBotActionsModal } = this.state;
		const { usedBots, activeBotIndex } = botsReducerState;
		
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
			</div>
		);
	}
}

const mapStateToProps = state => ({
	botsReducerState: state.usedBots,
});

export default connect(mapStateToProps, { addBot, removeBot })(Bots);
