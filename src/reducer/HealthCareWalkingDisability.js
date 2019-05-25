import { FETCH_HEALTHCARE_WALKING_DISABILITY } from '../action/healthcare';

const HealthCareWalkingDisability = (state = [], action) => {
	switch (action.type) {
		case FETCH_HEALTHCARE_WALKING_DISABILITY:
			return action.data;
		default:
			return state;
	}
};

export default HealthCareWalkingDisability;
