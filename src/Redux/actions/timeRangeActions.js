import { SET_TIME_RANGE } from '../types/timeRangeTypes';

export const setTimeRange = ({ value }) => dispatch => dispatch({
	type: SET_TIME_RANGE,
	payload: value,
});
