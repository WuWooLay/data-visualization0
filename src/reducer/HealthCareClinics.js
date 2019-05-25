import { FETCH_HEALTHCARE_CLINICS } from '../action/healthcare';

const HealthCareClincis = (state = [], action) => {
	switch (action.type) {
		case FETCH_HEALTHCARE_CLINICS:
			return action.data;
		default:
			return state;
	}
};

export default HealthCareClincis;
