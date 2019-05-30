import React from 'react';
import PropTypes from 'prop-types';

import './scss/_header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="header__menu-icon" />
			
			<p className="header__title">Dashboard</p>

			<div className="header__refresh-icon" />
		</header>
	);
};

export default Header;
