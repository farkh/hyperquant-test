import React, { Component } from 'react';

import Balance from '../../Components/Balance/Balance';
import Graph from '../../Components/Graph/Graph';
import Bots from '../../Components/Bots/Bots';
import TimeRange from '../../Components/TimeRange/TimeRange';

import './scss/_dashboard.scss';

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard">
				<Balance />
				<Graph />
				<Bots />
				<TimeRange />
			</div>
		);
	}
}

export default Dashboard;
