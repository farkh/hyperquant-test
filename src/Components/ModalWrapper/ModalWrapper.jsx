import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './scss/_modal-wrapper.scss';

class ModalWrapper extends Component {
	static propTypes = {
		show: PropTypes.bool,
		title: PropTypes.string,
		additionalClassName: PropTypes.string,
		renderBottomBlock: PropTypes.func,
	};

	static defaultProps = {
		show: false,
		title: 'Modal',
		additionalClassName: null,
		renderBottomBlock: () => {},
	};
	
	render() {
		const {
			show, title, additionalClassName, renderBottomBlock,
		} = this.props;
		
		if (!show) return null;
		
		return (
			<div className={`modal-wrapper ${additionalClassName && additionalClassName}`}>
				<div className="modal-wrapper__modal">
					<header className="modal-wrapper__header">
						<h2 className="modal-wrapper__title">{title}</h2>
					</header>

					<article className="modal-wrapper__content">{this.props.children}</article>
					
					<footer className="modal-wrapper__footer">
						{renderBottomBlock()}
					</footer>
				</div>
			</div>
		);
	}
}

export default ModalWrapper;
