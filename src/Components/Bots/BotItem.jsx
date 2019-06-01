import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BotItem extends Component {
	static propTypes = {
		uses: PropTypes.bool,
		index: PropTypes.number.isRequired,
		day: PropTypes.number,
		week: PropTypes.number,
		month: PropTypes.number,
		threeMonths: PropTypes.number,
		allTime: PropTypes.number,
		name: PropTypes.string,
		onClick: PropTypes.func.isRequired,
	};

	static defaultProps = {
		uses: false,
		day: null,
		week: null,
		month: null,
		threeMonths: null,
		allTime: null,
		name: null,
	};

	state = {
		timeRange: 0,
	};
	
	componentDidMount() {
		const { timeRangeReducerState } = this.props;
		const { timeRange } = timeRangeReducerState;
		this.setState({ timeRange });
	}

	componentWillReceiveProps(nextProps) {
		const { timeRangeReducerState } = nextProps;
		const { timeRange } = timeRangeReducerState;
		this.setState({ timeRange });
	}

	getDataByTimeRange = () => {
		const { day, week, month, threeMonths, allTime } = this.props;
		const { timeRange } = this.state;

		switch (timeRange) {
			case 0:
				return allTime;
			case 24:
				return day;
			case 7:
				return week;
			case 30:
				return month;
			case 90:
				return threeMonths;
			default:
				return allTime;
		}
	};
	
	render() {
		const {
			uses,
			index,
			name,
			onClick,
		} = this.props;
		const change = this.getDataByTimeRange();

		if (!uses) {
			return (
				<div className="bots__bot bot bot--empty" onClick={() => onClick(index)}>
					<div className="bot__content">
						<div className="bot__icon" />
						<p className="bot__title">Place bot here</p>
					</div>
				</div>
			);
		}

		return (
			<div className={`bots__bot bot bot--${name.split('_')[0]}`} onClick={() => onClick(index, name)}>
				<div className="bot__content">
					<div className="bot__icon" />
					<p className="bot__title">Attack</p>
					<p
						className={`bot__change ${change > 0 ? 'bot__change--positive' : 'bot__change--negative'}`}
					>
						{change}%
					</p>
				</div>
			</div>
		);
	};
}

const mapStateToProps = state => ({
	timeRangeReducerState: state.timeRange,
});

export default connect(mapStateToProps)(BotItem);
