import { FETCH_HEALTHCARE_SEEING_DISABILITY } from '../action/healthcare';

const HealthCareSeeingDisability = (state = [], action) => {
	switch (action.type) {
		case FETCH_HEALTHCARE_SEEING_DISABILITY:
			return action.data;
		default:
			return state;
	}
};

export default HealthCareSeeingDisability;
