import React, { Component } from 'react';

import RangeItem from './RangeItem';

import './scss/_time-range.scss';

class TimeRange extends Component {
	render() {
		return (
			<div className="dashboard__time-range time-range">
				<p className="time-range__label">Time Range:</p>

				<div className="time-range__ranges">
					<RangeItem />
					<RangeItem />
					<RangeItem />
					<RangeItem />
				</div>
			</div>
		)
	}
}

export default TimeRange;
