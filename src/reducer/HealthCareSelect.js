import { ADD_SELECT_HEALTHCARE, SELECT_WHOLE_HEALTHCARE, CLEAR_WHOLE_HEALTHCARE } from '../action/healthcare';

import {
	Kachin_SRP_Code,
	Kayah_SRP_Code,
	Kayin_SRP_Code,
	Chin_SRP_Code,
	Sagaing_SRP_Code,
	Tanintharyi_SRP_Code,
	Bago_SRP_Code,
	Magway_SRP_Code,
	Mandalay_SRP_Code,
	Mon_SRP_Code,
	Rakhine_SRP_Code,
	Yangon_SRP_Code,
	Shan_SRP_Code,
	Ayeyarwady_SRP_Code,
	Naypyitaw_SRP_Code
} from '../division-code/division-code';

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
		case SELECT_WHOLE_HEALTHCARE:
			return [
				Kachin_SRP_Code,
				Kayah_SRP_Code,
				Kayin_SRP_Code,
				Chin_SRP_Code,
				Sagaing_SRP_Code,
				Tanintharyi_SRP_Code,
				Bago_SRP_Code,
				Magway_SRP_Code,
				Mandalay_SRP_Code,
				Mon_SRP_Code,
				Rakhine_SRP_Code,
				Yangon_SRP_Code,
				Shan_SRP_Code,
				Ayeyarwady_SRP_Code,
				Naypyitaw_SRP_Code
			];
		case CLEAR_WHOLE_HEALTHCARE:
			return [];
		default:
			return state;
	}
};

export default HealthCareSelect;
