import { ADD_BOT, REMOVE_BOT, ACTIVATE_BOT } from '../types/botsTypes';

export const addBot = ({ bot, index }) => dispatch => dispatch({
	type: ADD_BOT,
	payload: {
		bot,
		index,
	},
});

export const removeBot = ({ index }) => dispatch => dispatch({
	type: REMOVE_BOT,
	payload: {
		index,
	},
});

export const activateBot = ({ index }) => dispatch => dispatch({
	type: ACTIVATE_BOT,
	payload: {
		index,
	},
});
