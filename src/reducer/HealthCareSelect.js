import { ADD_SELECT_HEALTHCARE } from '../action/healthcare';

const HealthCareSelect = (state = [], action) => {
	switch (action.type) {
		case ADD_SELECT_HEALTHCARE:
			const { SPR_CODE } = action;
			let filter = state.filter((data) => data === SPR_CODE);

			if (filter.length === 1) {
				return state.filter((data) => data !== SPR_CODE);
			} else {
				return [ ...state, SPR_CODE ];
			}
		default:
			return state;
	}
};

export default HealthCareSelect;
