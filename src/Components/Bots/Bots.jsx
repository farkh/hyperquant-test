import React, { Component } from 'react'

import BotItem from './BotItem';

import './scss/_bots.scss';

class Bots extends Component {
	render() {
		return (
			<div className="dashboard__bots bots">
				<div className="bots__row">
					<BotItem />
					<BotItem />
					<BotItem />
				</div>
				
				<div className="bots__row">
					<BotItem />
					<BotItem />
					<BotItem />
				</div>
			</div>
		);
	}
}

export default Bots;
