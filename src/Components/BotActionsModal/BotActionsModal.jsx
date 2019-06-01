import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ModalWrapper from '../ModalWrapper/ModalWrapper';

import { removeBot, activateBot } from '../../Redux/actions/botsActions';

class BotActionsModal extends Component {
	static propTypes = {
		show: PropTypes.bool,
		onClose: PropTypes.func.isRequired,
		index: PropTypes.number,
		isActive: PropTypes.bool,
	};

	static defaultProps = {
		show: false,
		index: 0,
		isActive: false,
	};

	handleRemoveBotClick = (e) => {
		if (e) e.preventDefault();
		const { index, onClose } = this.props;

		this.props.removeBot({ index });
		onClose();
	};

	handleActivateBotClick = (e) => {
		if (e) e.preventDefault();
		const { index, onClose } = this.props;
		
		this.props.activateBot({ index });
		onClose();
	};
	
	render() {
		const { show, onClose, isActive } = this.props;
		
		return (
			<ModalWrapper
				show={show}
				title="Bot actions"
				renderBottomBlock={() => (
					<React.Fragment>
						{!isActive && (
							<button className="btn btn--primary" onClick={this.handleActivateBotClick}>
								Activate
							</button>
						)}

						<button className="btn btn--danger" onClick={this.handleRemoveBotClick}>
							Remove
						</button>

						<button className="btn btn--default" onClick={onClose}>
							Close
						</button>
					</React.Fragment>
				)}
			>
				Select an action for the bot
			</ModalWrapper>
		);
	}
}

export default connect(null, { removeBot, activateBot })(BotActionsModal);
