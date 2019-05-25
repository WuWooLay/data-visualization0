import { FETCH_HEALTHCARE_RURAL_HEALTH } from '../action/healthcare';

const HealthCareRuralHealth = (state = [], action) => {
	switch (action.type) {
		case FETCH_HEALTHCARE_RURAL_HEALTH:
			return action.data;
		default:
			return state;
	}
};

export default HealthCareRuralHealth;
