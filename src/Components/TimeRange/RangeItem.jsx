import React from 'react';
import PropTypes from 'prop-types';

const RangeItem = ({ value, text, isActive, onRangeClick }) => {
	return (
		<div
			className={`time-range__range ${isActive && 'time-range__range--active'}`}
			onClick={() => onRangeClick(value)}
		>
			{text}
		</div>
	);
};

RangeItem.propTypes = {
	value: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
	onRangeClick: PropTypes.func.isRequired,
};

RangeItem.defaultProps = {
	isActive: false,
};

export default RangeItem;
