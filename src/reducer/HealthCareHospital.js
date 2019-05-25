import { FETCH_HEALTHCARE_HOSPITAL } from '../action/healthcare';

const HealthCareHospital = (state = [], action) => {
	switch (action.type) {
		case FETCH_HEALTHCARE_HOSPITAL:
			return action.data;
		default:
			return state;
	}
};

export default HealthCareHospital;
