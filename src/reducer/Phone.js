import { FETCH_PH } from '../action/phone';

const Phone = (state = [], action) => {
	switch (action.type) {
		case FETCH_PH:
			return action.data;
		default:
			return state;
	}
};

export default Phone;
