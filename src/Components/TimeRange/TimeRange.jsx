import React, { Component } from 'react';

import RangeItem from './RangeItem';

import './scss/_time-range.scss';

const RANGES = [
	{
		value: 1,
		text: '24h',
	},
	{
		value: 7,
		text: '7 days',
	},
	{
		value: 30,
		text: '30 days',
	},
	{
		value: 0,
		text: 'All time',
	},
];

class TimeRange extends Component {
	state = {
		selectedValue: 0,
	};

	handleRangeItemClick = (value) => {
		this.setState({ selectedValue: value });
	};
	
	render() {
		const { selectedValue } = this.state;
		
		return (
			<div className="dashboard__time-range time-range">
				<p className="time-range__label">Time Range:</p>

				<div className="time-range__ranges">
					{RANGES && RANGES.map(range => (
						<RangeItem
							key={range.value}
							{...range}
							isActive={selectedValue === range.value}
							onRangeClick={this.handleRangeItemClick}
						/>
					))}
				</div>
			</div>
		)
	}
}

export default TimeRange;
