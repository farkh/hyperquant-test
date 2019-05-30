import React, { Component } from 'react';

import Balance from '../../Components/Balance/Balance';
import Graph from '../../Components/Graph/Graph';
import Bots from '../../Components/Bots/Bots';

import './scss/_dashboard.scss';

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard">
				<Balance />
				<Graph />
				<Bots />
			</div>
		);
	}
}

export default Dashboard;
