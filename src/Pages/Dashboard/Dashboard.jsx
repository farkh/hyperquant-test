import React, { Component } from 'react';

import Balance from '../../Components/Balance/Balance';

import './scss/_dashboard.scss';

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard">
				<Balance />
			</div>
		);
	}
}

export default Dashboard;
