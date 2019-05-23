import { ADD } from '../action/index';

const addStore = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [ ...state, action.data ];
		default:
			return state;
	}
};

export default addStore;
