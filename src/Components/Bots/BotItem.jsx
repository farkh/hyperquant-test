import React from 'react'

import BotImg from '../../img/bot.png';

const BotItem = () => {
	return (
		<div className="bots__bot bot">
			<div className="bot__content">
				<img src={BotImg} alt="Bot" className="bot__icon" />
				<p className="bot__title">Attack</p>
				<p className="bot__change bot__change--negative">-8.2%</p>
			</div>
		</div>
	)
}

export default BotItem;
