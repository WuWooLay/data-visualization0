// Helath Care Remebering Disability
export const FETCH_TELEVISION = 'FETCH_TELEVISION';

const fetchTelevisionJson = () => {
	const url = 'https://data4change.herokuapp.com/dataset/television';
	return fetch(`${url}`).then((data) => data.json());
};

const receiveTelevision = (objdata) => {
	const { data } = objdata;
	return {
		type: FETCH_TELEVISION,
		data
	};
};

export const fetchTelevision = () => {
	return (dispatch, getState) => {
		fetchTelevisionJson().then((json) => dispatch(receiveTelevision(json))).catch((err) => console.log(err));
	};
};
