import React from 'react';
import PropTypes from 'prop-types';

import './scss/_loading-overlay.scss';

const LoadingOverlay = ({ show, text }) => {
	if (!show) return null;
	
	return (
		<div className="loading-overlay">
			<div className="loading-overlay__spinner" />
			{text && <p className="loading-overlay__text">{text}</p>}
		</div>
	);
};

LoadingOverlay.propTypes = {
	show: PropTypes.bool.isRequired,
	text: PropTypes.string,
};

LoadingOverlay.defaultProps = {
	text: null,
};

export default LoadingOverlay;
