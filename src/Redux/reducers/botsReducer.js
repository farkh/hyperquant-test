import { ADD_BOT, REMOVE_BOT, ACTIVATE_BOT } from '../types/botsTypes';

const initialState = {
	usedBots: [
		{}, {}, {}, {}, {}, {},
	],
	activeBotIndex: -1,
	megabotIndex: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_BOT:
			const { bot, index } = action.payload;
			const megabotIndex = action.payload.bot.name === 'yellow_bot' ? index : state.megabotIndex;

			return {
				...state,
				usedBots: [
					...state.usedBots.slice(0, index),
					bot,
					...state.usedBots.slice(index + 1),
				],
				megabotIndex,
			};
		case REMOVE_BOT:
			const activeBotIndex = state.activeBotIndex === action.payload.index ? -1 : state.activeBotIndex;
			const megaBotIndex = action.payload.index === state.megabotIndex ? null : state.megabotIndex;
			
			return {
				...state,
				usedBots: [
					...state.usedBots.slice(0, action.payload.index),
					{},
					...state.usedBots.slice(action.payload.index + 1),
				],
				activeBotIndex,
				megabotIndex: megaBotIndex,
			};
		case ACTIVATE_BOT:
			return {
				...state,
				activeBotIndex: action.payload.index,
			};
		default:
			return state;
	}
};
