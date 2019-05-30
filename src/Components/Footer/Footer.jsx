import React from 'react';

import './scss/_footer.scss';

const Footer = () => {
	return (
		<footer className="footer">
			<div
				className="footer__item footer__item--dashboard footer__item--active"
			>
				Dashboard
			</div>
			<div
				className="footer__item footer__item--megabot"
			>
				Megabot
			</div>
			<div
				className="footer__item footer__item--market"
			>
				Bot market
			</div>
			<div
				className="footer__item footer__item--prices"
			>
				Coin prices
			</div>
			<div
				className="footer__item footer__item--profile"
			>
				Profile

				<span className="footer__item-badge">3</span>
			</div>
		</footer>
	);
};

export default Footer;
