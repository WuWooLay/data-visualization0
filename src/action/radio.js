// Helath Care Remebering Disability
export const FETCH_RADIO = 'FETCH_RADIO';

const fetchRadioJson = () => {
	const url = 'http://data4change.herokuapp.com/dataset/radio';
	return fetch(`${url}`).then((data) => data.json());
};

const receiveRadioHealth = (objdata) => {
	const { data } = objdata;
	return {
		type: FETCH_RADIO,
		data
	};
};

export const fetchRadio = () => {
	return (dispatch, getState) => {
		fetchRadioJson().then((json) => dispatch(receiveRadioHealth(json))).catch((err) => console.log(err));
	};
};
