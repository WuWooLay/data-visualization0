import { EDU_SELECT_ADD } from '../action/education';

const EducationSelect = (state = [], action) => {
	switch (action.type) {
		case EDU_SELECT_ADD:
			const { division } = action;
			let filter = state.filter((data) => data === division);

			if (filter.length === 1) {
				return state.filter((data) => data !== division);
			} else {
				return [ ...state, action.division ];
			}
		default:
			return state;
	}
};

export default EducationSelect;
