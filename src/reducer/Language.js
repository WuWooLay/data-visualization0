import { SET_LANGUAGE } from '../action/language';

const Language = (state = { lang: 'en' }, action) => {
	switch (action.type) {
		case SET_LANGUAGE:
			return { lang: action.lang };
		default:
			return state;
	}
};

export default Language;
