// Helath Care Personal
export const FETCH_HEALTHCARE_PERSONAL = 'FETCH_HEALTHCARE_PERSONAL';

const fetchHealthCarePersonalJson = () => {
	const url = 'http://data4change.herokuapp.com/dataset/health-care-personal';
	return fetch(`${url}`).then((data) => data.json());
};

const receiveHealthCarePersonal = (objdata) => {
	const { data } = objdata;
	return {
		type: FETCH_HEALTHCARE_PERSONAL,
		data
	};
};

export const fetchHealthCarePersonal = () => {
	return (dispatch, getState) => {
		fetchHealthCarePersonalJson()
			.then((json) => dispatch(receiveHealthCarePersonal(json)))
			.catch((err) => console.log(err));
	};
};

// Helath Care DISEASES
export const FETCH_HEALTHCARE_MOST_DISEASES = 'FETCH_HEALTHCARE_MOST_DISEASES';

const fetchHealthCareMostDiseasesJson = () => {
	const url = 'http://data4change.herokuapp.com/dataset/most-disease';
	return fetch(`${url}`).then((data) => data.json());
};

const receiveHealthCareMostDiseases = (objdata) => {
	const { data } = objdata;
	return {
		type: FETCH_HEALTHCARE_MOST_DISEASES,
		data
	};
};

export const fetchHealthCareMostDiseases = () => {
	return (dispatch, getState) => {
		fetchHealthCareMostDiseasesJson()
			.then((json) => dispatch(receiveHealthCareMostDiseases(json)))
			.catch((err) => console.log(err));
	};
};

// Helath Care HOSTPITAL
export const FETCH_HEALTHCARE_HOSPITAL = 'FETCH_HEALTHCARE_HOSPITAL';

const fetchHealthCareHospitalJson = () => {
	const url = 'http://data4change.herokuapp.com/dataset/hospitals';
	return fetch(`${url}`).then((data) => data.json());
};

const receiveHealthCareHospital = (objdata) => {
	const { data } = objdata;
	return {
		type: FETCH_HEALTHCARE_HOSPITAL,
		data
	};
};

export const fetchHealthCareHospital = () => {
	return (dispatch, getState) => {
		fetchHealthCareHospitalJson()
			.then((json) => dispatch(receiveHealthCareHospital(json)))
			.catch((err) => console.log(err));
	};
};

// Helath Care Clinics
export const FETCH_HEALTHCARE_CLINICS = 'FETCH_HEALTHCARE_CLINICS';

const fetchHealthCareClinicsJson = () => {
	const url = 'http://data4change.herokuapp.com/dataset/clinics';
	return fetch(`${url}`).then((data) => data.json());
};

const receiveHealthCareClinics = (objdata) => {
	const { data } = objdata;
	return {
		type: FETCH_HEALTHCARE_CLINICS,
		data
	};
};

export const fetchHealthCareClinics = () => {
	return (dispatch, getState) => {
		fetchHealthCareClinicsJson()
			.then((json) => dispatch(receiveHealthCareClinics(json)))
			.catch((err) => console.log(err));
	};
};

// Helath Care Rural Health
export const FETCH_HEALTHCARE_RURAL_HEALTH = 'FETCH_HEALTHCARE_RURAL_HEALTH';

const fetchHealthCareRuralHealthJson = () => {
	const url = 'http://data4change.herokuapp.com/dataset/rural-health';
	return fetch(`${url}`).then((data) => data.json());
};

const receiveHealthCareRuralHealth = (objdata) => {
	const { data } = objdata;
	return {
		type: FETCH_HEALTHCARE_RURAL_HEALTH,
		data
	};
};

export const fetchHealthCareRuralHealth = () => {
	return (dispatch, getState) => {
		fetchHealthCareRuralHealthJson()
			.then((json) => dispatch(receiveHealthCareRuralHealth(json)))
			.catch((err) => console.log(err));
	};
};

// Helath Care Walking Disability
export const FETCH_HEALTHCARE_WALKING_DISABILITY = 'FETCH_HEALTHCARE_WALKING_DISABILITY';

const fetchHealthCareWalkingDisabilityJson = () => {
	const url = 'http://data4change.herokuapp.com/dataset/walking-disability';
	return fetch(`${url}`).then((data) => data.json());
};

const receiveHealthCareWalkingDisabilityHealth = (objdata) => {
	const { data } = objdata;
	return {
		type: FETCH_HEALTHCARE_WALKING_DISABILITY,
		data
	};
};

export const fetchHealthCareWalkingDisability = () => {
	return (dispatch, getState) => {
		fetchHealthCareWalkingDisabilityJson()
			.then((json) => dispatch(receiveHealthCareWalkingDisabilityHealth(json)))
			.catch((err) => console.log(err));
	};
};

// Helath Care Seeing Disability
export const FETCH_HEALTHCARE_SEEING_DISABILITY = 'FETCH_HEALTHCARE_SEEING_DISABILITY';

const fetchHealthCareSeeingDisabilityJson = () => {
	const url = 'http://data4change.herokuapp.com/dataset/seeing-disability';
	return fetch(`${url}`).then((data) => data.json());
};

const receiveHealthCareSeeingDisabilityHealth = (objdata) => {
	const { data } = objdata;
	return {
		type: FETCH_HEALTHCARE_SEEING_DISABILITY,
		data
	};
};

export const fetchHealthCareSeeingDisability = () => {
	return (dispatch, getState) => {
		fetchHealthCareSeeingDisabilityJson()
			.then((json) => dispatch(receiveHealthCareSeeingDisabilityHealth(json)))
			.catch((err) => console.log(err));
	};
};

// Helath Care Hearing Disability
export const FETCH_HEALTHCARE_HEARING_DISABILITY = 'FETCH_HEALTHCARE_HEARING_DISABILITY';

const fetchHealthCareHearingDisabilityJson = () => {
	const url = 'http://data4change.herokuapp.com/dataset/hearing-disability';
	return fetch(`${url}`).then((data) => data.json());
};

const receiveHealthCareHearingDisabilityHealth = (objdata) => {
	const { data } = objdata;
	return {
		type: FETCH_HEALTHCARE_HEARING_DISABILITY,
		data
	};
};

export const fetchHealthCareHearingDisability = () => {
	return (dispatch, getState) => {
		fetchHealthCareHearingDisabilityJson()
			.then((json) => dispatch(receiveHealthCareHearingDisabilityHealth(json)))
			.catch((err) => console.log(err));
	};
};

// Helath Care Remebering Disability
export const FETCH_HEALTHCARE_REMEBERING_DISABILITY = 'FETCH_HEALTHCARE_REMEBERING_DISABILITY';

const fetchHealthCareRemeberingDisabilityJson = () => {
	const url = 'http://data4change.herokuapp.com/dataset/remembering-disability';
	return fetch(`${url}`).then((data) => data.json());
};

const receiveHealthCareRemeberingDisabilityHealth = (objdata) => {
	const { data } = objdata;
	return {
		type: FETCH_HEALTHCARE_REMEBERING_DISABILITY,
		data
	};
};

export const fetchHealthCareRememberingDisability = () => {
	return (dispatch, getState) => {
		fetchHealthCareRemeberingDisabilityJson()
			.then((json) => dispatch(receiveHealthCareRemeberingDisabilityHealth(json)))
			.catch((err) => console.log(err));
	};
};


// Add HealthCare
export const ADD_SELECT_HEALTHCARE = 'ADD_SELECT_HEALTHCARE';

export const addSelectHelathCare = (SPR_CODE) => {
	// console.log('In addSelectHEALTHCARE()', SPR_CODE);
	return {
		type: ADD_SELECT_HEALTHCARE,
		SPR_CODE
	};
};
