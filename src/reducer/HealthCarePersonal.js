import { FETCH_HEALTHCARE_PERSONAL } from '../action/healthcare';

const HealthCarePersonal = (state = [], action) => {
	switch (action.type) {
		case FETCH_HEALTHCARE_PERSONAL:
			return action.data;
		default:
			return state;
	}
};

export default HealthCarePersonal;
