import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './scss/_modal-wrapper.scss';

class ModalWrapper extends Component {
	static propTypes = {
		show: PropTypes.bool,
		title: PropTypes.string,
		onClose: PropTypes.func.isRequired,
		onSuccess: PropTypes.func,
		closeText: PropTypes.string,
		successText: PropTypes.string,
		showSuccessBtn: PropTypes.bool,
		additionalClassName: PropTypes.string,
	};

	static defaultProps = {
		show: false,
		title: 'Modal',
		onSuccess: () => {},
		closeText: 'Cancel',
		successText: 'Ok',
		showSuccessBtn: true,
		additionalClassName: null,
	};
	
	render() {
		const {
			show, onClose, title, onSuccess, closeText, successText, showSuccessBtn, additionalClassName,
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
						<button
							className="btn btn--default"
							onClick={onClose}
						>
							{closeText}
						</button>

						{showSuccessBtn && (
							<button
								className="btn btn--primary"
								onClick={onSuccess}
							>
								{successText}
							</button>
						)}
					</footer>
				</div>
			</div>
		);
	}
}

export default ModalWrapper;
