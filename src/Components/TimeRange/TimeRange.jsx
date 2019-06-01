import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RangeItem from './RangeItem';

import { setTimeRange } from '../../Redux/actions/timeRangeActions';
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
		value: 90,
		text: '90 days',
	},
	{
		value: 0,
		text: 'All time',
	},
];

class TimeRange extends Component {
	static propTypes = {
		setTimeRange: PropTypes.func.isRequired,
	};
	
	state = {
		selectedValue: 0,
	};

	componentDidMount() {
		const { timeRangeReducerState } = this.props;
		const { timeRange } = timeRangeReducerState;
		this.setState({ selectedValue: timeRange });
	}

	componentWillReceiveProps(nextProps) {
		const { timeRangeReducerState } = nextProps;
		const { timeRange } = timeRangeReducerState;
		this.setState({ selectedValue: timeRange });
	}

	handleRangeItemClick = (value) => {
		this.props.setTimeRange({ value });
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

const mapStateToProps = state => ({
	timeRangeReducerState: state.timeRange,
});

export default connect(mapStateToProps, { setTimeRange })(TimeRange);
