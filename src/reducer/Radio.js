import { FETCH_RADIO } from '../action/radio';

const Radio = (state = [], action) => {
	switch (action.type) {
		case FETCH_RADIO:
			return action.data;
		default:
			return state;
	}
};

export default Radio;
