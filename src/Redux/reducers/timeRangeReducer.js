import { SET_TIME_RANGE } from '../types/timeRangeTypes';

const initialState = {
	timeRange: 0,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_TIME_RANGE:
			return {
				...state,
				timeRange: action.payload,
			};
		default:
			return state;
	}
};
