import { FETCH_HEALTHCARE_MOST_DISEASES } from '../action/healthcare';

const HealthCareMostDiseases = (state = [], action) => {
	switch (action.type) {
		case FETCH_HEALTHCARE_MOST_DISEASES:
			return action.data;
		default:
			return state;
	}
};

export default HealthCareMostDiseases;
