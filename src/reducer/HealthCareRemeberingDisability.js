import { FETCH_HEALTHCARE_REMEBERING_DISABILITY } from '../action/healthcare';

const HealthCareRemeberingDisability = (state = [], action) => {
	switch (action.type) {
		case FETCH_HEALTHCARE_REMEBERING_DISABILITY:
			return action.data;
		default:
			return state;
	}
};

export default HealthCareRemeberingDisability;
