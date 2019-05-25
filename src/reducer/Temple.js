import { FETCH_TEMPLE } from '../action/temple';

const Temple = (state = [], action) => {
	switch (action.type) {
		case FETCH_TEMPLE:
			return action.data;
		default:
			return state;
	}
};

export default Temple;
