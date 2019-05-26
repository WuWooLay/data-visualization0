import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Import Division
import WrapMap from '../../Map/Select/WrapMap';
import {
	Kachin,
	Kayar,
	Kayin,
	Chin,
	Yangon,
	Rakhine,
	Shan,
	Mon,
	Bago,
	Ayeyarwady,
	Magwe,
	Mandalay,
	Sagaing,
	Tanintharyi,
	Naypyidaw
} from '../../Map/Select/List/List';

class HealthCareSelectorMap extends Component {
	render() {
		// console.log(this.props);
		let { addSelectHelathCare, selectedHealthCare } = this.props;
		return (
			<WrapMap>
				<Kachin
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>
				<Kayar
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>
				<Kayin
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>
				<Chin
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>

				<Link to="/healthcare/yangon">
					<Yangon />
				</Link>
				<Mon
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>
				<Rakhine
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>
				<Shan
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>
				<Bago
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>
				<Ayeyarwady
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>
				<Magwe
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>
				<Mandalay
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>
				<Sagaing
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>
				<Tanintharyi
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>
				<Naypyidaw
					onclick={() => {
						alert('Will Be Update Soon');
					}}
				/>
			</WrapMap>
		);
	}
}

export default connect(null, {})(HealthCareSelectorMap);
