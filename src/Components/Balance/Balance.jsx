import React from 'react';

import './scss/_balance.scss';

const Balance = () => {
	return (
		<div className="dashboard__balance balance">
			<div className="balance__capital">
				<p className="balance__capital-label">Trading capital</p>
				<p className="balance__capital-value">1.00865 BTC</p>
			</div>
			
			<div className="balance__info">
				<div className="balance__info-row">
					<p className="balance__info-label">Balance:</p>
					<p className="balance__info-value">10 850</p>

					<div className="balance__info-row-icon" />
				</div>

				<div className="balance__info-row">
					<p className="balance__info-label">On hold:</p>
					<p className="balance__info-value">24 000</p>

					<div className="balance__info-row-icon" />
				</div>
			</div>
		</div>
	)
}

export default Balance;
