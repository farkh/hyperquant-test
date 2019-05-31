import React from 'react';
import PropTypes from 'prop-types';

import './scss/_balance.scss';

const Balance = ({ balance, tradingCapital, tradingCurrency, onHold }) => {
	return (
		<div className="dashboard__balance balance">
			<div className="balance__capital">
				<p className="balance__capital-label">Trading capital</p>
				<p
					className="balance__capital-value"
				>
					{tradingCapital}&nbsp;
					<span className="balance__capital-currency">{tradingCurrency}</span>
				</p>
			</div>
			
			<div className="balance__info">
				<div className="balance__info-row">
					<p className="balance__info-label">Balance:</p>
					<p className="balance__info-value">{balance}</p>

					<div className="balance__info-row-icon" />
				</div>

				<div className="balance__info-row">
					<p className="balance__info-label">On hold:</p>
					<p className="balance__info-value">{onHold}</p>

					<div className="balance__info-row-icon" />
				</div>
			</div>
		</div>
	);
};

Balance.propTypes = {
	balance: PropTypes.number.isRequired,
	tradingCapital: PropTypes.number.isRequired,
	tradingCurrency: PropTypes.string.isRequired,
	onHold: PropTypes.number.isRequired,
};

export default Balance;
