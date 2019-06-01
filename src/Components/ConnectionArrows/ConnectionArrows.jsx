import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArrowItem from './ArrowItem';

import './scss/_connection-arrows.scss';

class ConnectionArrows extends Component {
	static propTypes = {
		visibleArrowsIndexes: PropTypes.array,
	};

	static defaultProps = {
		visibleArrowsIndexes: [],
	};
	
	renderArrows = () => {
		const { visibleArrowsIndexes } = this.props;
		const arrows = [];

		for (let i = 1; i < 12; i++) {
			arrows.push(<ArrowItem key={i} index={i} isVisible={visibleArrowsIndexes.includes(i)} />);
		}

		return arrows;
	};
	
	render() {
		return (
			<React.Fragment>
				{this.renderArrows()}
			</React.Fragment>
		);
	}
}

export default ConnectionArrows;
