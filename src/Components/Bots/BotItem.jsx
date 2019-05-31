import React from 'react'
import PropTypes from 'prop-types';

import BotImg from '../../img/bot.png';

const BotItem = ({
	isActive,
	day,
	week,
	month,
	threeMonths,
	allTime,
	cost,
	name,
	onClick,
}) => {
	return (
		<div className="bots__bot bot">
			<div className="bot__content">
				<img src={BotImg} alt="Bot" className="bot__icon" />
				<p className="bot__title">Attack</p>
				<p className="bot__change bot__change--negative">-8.2%</p>
			</div>
		</div>
	);
};

BotItem.propTypes = {
	isActive: PropTypes.bool,
	day: PropTypes.number.isRequired,
	week: PropTypes.number.isRequired,
	month: PropTypes.number.isRequired,
	threeMonths: PropTypes.number.isRequired,
	allTime: PropTypes.number.isRequired,
	cost: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

BotItem.defaultProps = {
	isActive: false,
};

export default BotItem;
