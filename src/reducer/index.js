import { combineReducers } from 'redux';

import Language from './Language';
import EducationSelect from './EducationSelect';
import Temple from './Temple';
import TempleSelect from './TempleSelect';
import HealthCarePersonal from './HealthCarePersonal';
import HealthCareMostDiseases from './HealthCareMostDiseases';
import HealthCareHospital from './HealthCareHospital';
import HealthCareClinics from './HealthCareClinics';
import HealthCareRuralHealth from './HealthCareRuralHealth';
import HealthCareWalkingDisability from './HealthCareWalkingDisability';
import HealthCareSeeingDisability from './HealthCareSeeingDisability';
import HealthCareHearingDisability from './HealthCareHearingDisability';
import HealthCareRemeberingDisability from './HealthCareRemeberingDisability';
import HealthCareSelect from './HealthCareSelect';
import Radio from './Radio';
import Phone from './Phone';
import Television from './Television';

export const RootReducer = combineReducers({
	Language,
	EducationSelect,
	Temple,
	TempleSelect,
	HealthCarePersonal,
	HealthCareMostDiseases,
	HealthCareHospital,
	HealthCareClinics,
	HealthCareRuralHealth,
	HealthCareWalkingDisability,
	HealthCareSeeingDisability,
	HealthCareHearingDisability,
	HealthCareRemeberingDisability,
	HealthCareSelect,
	Radio,
	Phone,
	Television
});
