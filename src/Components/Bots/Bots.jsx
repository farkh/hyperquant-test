import React, { Component } from 'react'

import BotItem from './BotItem';

import './scss/_bots.scss';

class Bots extends Component {
	render() {
		return (
			<div className="dashboard__bots bots">
				<BotItem />
				<BotItem />
				<BotItem />
				<BotItem />
				<BotItem />
				<BotItem />
			</div>
		);
	}
}

export default Bots;
