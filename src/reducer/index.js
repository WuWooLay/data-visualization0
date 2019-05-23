import { combineReducers } from 'redux';

import addStore from './addStore';
import Language from './Language';

export const RootReducer = combineReducers({
	addStore,
	Language
});
