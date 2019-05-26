import React from 'react';
import { Bar, HorizontalBar } from 'react-chartjs-2';

export const SameColor = [ "rgba(36, 215, 255, 0.6)" ];

export const DoubleColor = [
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b',
	'#d76fd2',
	'#ff6b6b'
];

export const HorBar = (props) => (
	<HorizontalBar
		data={{
			...props.data
		}}
		options={{
			legend: {
				display: false
			},
			responsive: true,
			aspectRatio: 3
		}}
	/>
);

export default (props) => {
	return (
		<Bar
			data={{
				...props.data
			}}
			options={{
				legend: {
					display: false
				},
				responsive: true,
				aspectRatio: 3
			}}
		/>
	);
};
