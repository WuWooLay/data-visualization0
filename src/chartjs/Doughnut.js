import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutColor = [ '#48dbfb', '#ff6b6b', '#ff9f43', '#ff9ff3', '#5f27cd', '#00d2d3' ];

export default (props) => {
	return (
		<Doughnut
			data={{
				...props.data
			}}
			options={{
				legend: {
					position: 'bottom'
				},
				responsive: true,
				aspectRatio: 3
			}}
		/>
	);
};
