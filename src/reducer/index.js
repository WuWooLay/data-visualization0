import { combineReducers } from 'redux';

import addStore from './addStore';
import Language from './Language';
import EducationSelect from './EducationSelect';

export const RootReducer = combineReducers({
	addStore,
	Language,
	EducationSelect
});
