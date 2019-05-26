import React from 'react';
import { Line } from 'react-chartjs-2';

export const LineBar = (props) => (
	<Line
		data={{
			...props.data
		}}
		options={{
			responsive: true,
			aspectRatio: 3,
			elements: {
				line: {
					tension: 0.000001
				}
			}
		}}
	/>
);
