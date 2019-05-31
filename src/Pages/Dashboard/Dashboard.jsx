import React, { Component } from 'react';

import Balance from '../../Components/Balance/Balance';
import Graph from '../../Components/Graph/Graph';
import Bots from '../../Components/Bots/Bots';
import TimeRange from '../../Components/TimeRange/TimeRange';

import LoadingOverlay from '../../Components/LoadingOverlay/LoadingOverlay';

import './scss/_dashboard.scss';

import data from '../../data.min.json';

class Dashboard extends Component {
	state = {
		isLoading: true,
		balance: 0,
		bots: [],
		tradingCapital: 0,
		tradingCurrency: '',
		onHold: 0,
	};
	
	componentDidMount() {
		const {
			balance,
			bots,
			on_hold: onHold,
			trading_capital: tradingCapital,
			trading_capital_currency: tradingCurrency,
		} = data;

		this.setState({
			balance,
			bots,
			onHold,
			tradingCapital,
			tradingCurrency,
			isLoading: false,
		});

		console.log('data', data);
	}
	
	render() {
		const {
			isLoading,
			balance,
			bots,
			onHold,
			tradingCapital,
			tradingCurrency,
		} = this.state;
		
		return (
			<div className="dashboard">
				<LoadingOverlay show={isLoading} text="Loading..." />
				
				<Balance
					balance={balance}
					tradingCapital={tradingCapital}
					tradingCurrency={tradingCurrency}
					onHold={onHold}
				/>

				<Graph />

				<Bots bots={bots} />
				
				<TimeRange />
			</div>
		);
	}
}

export default Dashboard;
