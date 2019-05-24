import React from 'react';
import './WholeMap.css';

const WrapMap = (props) => (
	<svg
		id="MM_x5F_SELECT"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 465 1028"
		className="z-Index-1"
	>
		{props.children}
	</svg>
);

export default WrapMap;