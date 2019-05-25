import { combineReducers } from 'redux';

import Language from './Language';
import EducationSelect from './EducationSelect';
import Temple from './Temple';
import TempleSelect from './TempleSelect';

export const RootReducer = combineReducers({
	Language,
	EducationSelect,
	Temple,
	TempleSelect
});
