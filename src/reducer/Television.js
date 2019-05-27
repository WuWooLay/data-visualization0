import { FETCH_TELEVISION } from '../action/television';

const Television = (state = [], action) => {
	switch (action.type) {
		case FETCH_TELEVISION:
			return action.data;
		default:
			return state;
	}
};

export default Television;
