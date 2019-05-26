export const FETCH_TEMPLE = 'FETCH_TEMPLE';

const fetchTempleJson = () => {
	return fetch(`https://data4change.herokuapp.com/dataset/hearing-disability`).then((data) => data.json());
};

const receiveTemple = (objdata) => {
	const { data } = objdata;
	return {
		type: FETCH_TEMPLE,
		data
	};
};

export const fetchTemple = () => {
	return (dispatch, getState) => {
		fetchTempleJson().then((json) => dispatch(receiveTemple(json))).catch((err) => console.log(err));
	};
};

// Add Temple
export const ADD_SELECT_TEMPLE = 'ADD_SELECT_TEMPLE';

export const addSelectTemple = (data) => {
	// console.log('In addSelectTemple()', data);
	return {
		type: ADD_SELECT_TEMPLE,
		data
	};
};
