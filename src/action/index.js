export const ADD = 'ADD';

export const addSomething = () => {
	return {
		type: ADD,
		data: Math.random()
	};
};
