import { FETCH_HEALTHCARE_HEARING_DISABILITY } from '../action/healthcare';

const HealthCareHearingDisability = (state = [], action) => {
	switch (action.type) {
		case FETCH_HEALTHCARE_HEARING_DISABILITY:
			return action.data;
		default:
			return state;
	}
};

export default HealthCareHearingDisability;
