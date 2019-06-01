import React from 'react';
import PropTypes from 'prop-types';

const ArrowItem = ({ index, isVisible }) => (
	<div
		className={`connection-arrow connection-arrow--${index} ${isVisible ? 'connection-arrow--visible' : ''}`}
	/>
);

ArrowItem.propTypes = {
	index: PropTypes.number.isRequired,
	isVisible: PropTypes.bool,
};

ArrowItem.defaultProps = {
	isVisible: false,
};

export default ArrowItem;
