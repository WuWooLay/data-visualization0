export const EDU_SELECT_ADD = 'EDU_SELECT_ADD';

export const addEductaionSelector = (division) => {
	return {
		type: EDU_SELECT_ADD,
		division
	};
};
