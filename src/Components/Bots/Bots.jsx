import React, { Component } from 'react'
import PropTypes from 'prop-types';

import BotItem from './BotItem';

import './scss/_bots.scss';

class Bots extends Component {
	static propTypes = {
		bots: PropTypes.arrayOf(PropTypes.object),
	};

	state = {
		selectedBotName: '',
	};

	handleClickBotItem = (name) => {
		this.setState({ selectedBotName: name });
	};
	
	render() {
		const { bots, selectedBotName } = this.props;
		
		return (
			<div className="dashboard__bots bots">
				{bots && bots.length > 0 && bots.map((bot) => {
					return (
						<BotItem
							key={bot.name}
							uses={false}
							isActive={selectedBotName === bot.name}
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
			</div>
		);
	}
}

export default Bots;
