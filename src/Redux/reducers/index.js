import { combineReducers } from 'redux';

import botsReducer from './botsReducer';
import timeRangeReducer from './timeRangeReducer';

export default combineReducers({
	usedBots: botsReducer,
	timeRange: timeRangeReducer,
});
