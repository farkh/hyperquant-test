import React from 'react';
import PropTypes from 'prop-types';

const BotListItem = ({ name, cost, onBotClick }) => {
	return (
		<div className="add-bot__item" onClick={() => onBotClick(name)}>
			{name} - {cost}
		</div>
	);
};

BotListItem.propTypes = {
	name: PropTypes.string.isRequired,
	cost: PropTypes.number.isRequired,
	onBotClick: PropTypes.func.isRequired,
};

export default BotListItem;
