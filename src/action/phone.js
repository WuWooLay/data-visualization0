// Helath Care Remebering Disability
export const FETCH_PH = 'FETCH_PH';

const fetchPhJson = () => {
	const url = 'https://data4change.herokuapp.com/dataset/phone';
	return fetch(`${url}`).then((data) => data.json());
};

const receivePhone = (objdata) => {
	const { data } = objdata;
	return {
		type: FETCH_PH,
		data
	};
};

export const fetchPh = () => {
	return (dispatch, getState) => {
		fetchPhJson().then((json) => dispatch(receivePhone(json))).catch((err) => console.log(err));
	};
};
