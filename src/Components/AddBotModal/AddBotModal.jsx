import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ModalWrapper from '../ModalWrapper/ModalWrapper';
import BotListItem from './BotListItem';

import { addBot } from '../../Redux/actions/botsActions';
import data from '../../data.min.json';
import './scss/_add-bot-modal.scss';

class AddBotModal extends Component {
	static propTypes = {
		show: PropTypes.bool,
		onClose: PropTypes.func.isRequired,
		index: PropTypes.number,
	};

	static defaultProps = {
		index: 0,
	};

	state = {
		bots: [],
	};

	componentDidMount() {
		const { bots } = data;

		this.setState({ bots });
	}

	handleChooseBot = (name) => {
		const { index } = this.props;
		const { bots } = this.state;
		const bot = bots.filter(x => x.name === name)[0];

		this.props.addBot({ bot, index });
		this.props.onClose();
	};
	
	render() {
		const { show, onClose } = this.props;
		const { bots } = this.state;
		
		return (
			<ModalWrapper
				show={show}
				onClose={onClose}
				title="Add bot"
				showSuccessBtn={false}
				additionalClassName="add-bot"
			>
				{bots && bots.map(bot => (
					<BotListItem
						key={bot.name}
						name={bot.name}
						cost={bot.cost}
						onBotClick={this.handleChooseBot}
					/>
				))}
			</ModalWrapper>
		);
	}
}

export default connect(null, { addBot })(AddBotModal);
