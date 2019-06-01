import { ADD_BOT, REMOVE_BOT, ACTIVATE_BOT } from '../types/botsTypes';

const initialState = {
	usedBots: [
		{}, {}, {}, {}, {}, {},
	],
	activeBotIndex: -1,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_BOT:
			const { bot, index } = action.payload;

			return {
				...state,
				usedBots: [
					...state.usedBots.slice(0, index),
					bot,
					...state.usedBots.slice(index + 1),
				],
			};
		case REMOVE_BOT:
			const activeBotIndex = state.activeBotIndex === action.payload.index ? -1 : state.activeBotIndex;
			
			return {
				...state,
				usedBots: [
					...state.usedBots.slice(0, action.payload.index),
					{},
					...state.usedBots.slice(action.payload.index + 1),
				],
				activeBotIndex,
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
