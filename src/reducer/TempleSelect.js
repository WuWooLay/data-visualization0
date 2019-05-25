import { ADD_SELECT_TEMPLE } from '../action/temple';

const TempleSelect = (state = [], action) => {
	switch (action.type) {
		case ADD_SELECT_TEMPLE:
			let [ obj ] = action.data;

			let isFound = false;
			state.map((data) => {
				if (data.SR_PCODE === obj.SR_PCODE) {
					console.log('Tu Dal');
					isFound = true;
				}
			});

			if (isFound) {
				return state.filter((data) => data.SR_PCODE !== obj.SR_PCODE);
			} else {
				return [ ...state, ...action.data ];
			}
		default:
			return state;
	}
};

export default TempleSelect;
