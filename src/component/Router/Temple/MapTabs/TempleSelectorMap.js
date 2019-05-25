import React, { Component } from 'react';
import { connect } from 'react-redux';

// Dispatch
import { addSelectTemple } from '../../../../action/temple';

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

// Division Code
import {
	Kachin_SRP_Code,
	Kayah_SRP_Code,
	Kayin_SRP_Code,
	Chin_SRP_Code,
	Sagaing_SRP_Code,
	Tanintharyi_SRP_Code,
	Bago_SRP_Code,
	Magway_SRP_Code,
	Mandalay_SRP_Code,
	Mon_SRP_Code,
	Rakhine_SRP_Code,
	Yangon_SRP_Code,
	Shan_SRP_Code,
	Ayeyarwady_SRP_Code,
	Naypyitaw_SRP_Code
} from '../../../../division-code/division-code';

class TempleSelectorMap extends Component {
	render() {
		// console.log(this.props);
		let { temple, selectedTemple } = this.props;
		return (
			<WrapMap>
				<Kachin
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Kachin_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(selectedTemple.filter((data) => data.SR_PCODE === Kachin_SRP_Code).length === 1)}
				/>
				<Kayar
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Kayah_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(selectedTemple.filter((data) => data.SR_PCODE === Kayah_SRP_Code).length === 1)}
				/>
				<Kayin
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Kayin_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(selectedTemple.filter((data) => data.SR_PCODE === Kayin_SRP_Code).length === 1)}
				/>
				<Chin
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Chin_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(selectedTemple.filter((data) => data.SR_PCODE === Chin_SRP_Code).length === 1)}
				/>
				<Yangon
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Yangon_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(selectedTemple.filter((data) => data.SR_PCODE === Yangon_SRP_Code).length === 1)}
				/>
				<Mon
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Mon_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(selectedTemple.filter((data) => data.SR_PCODE === Mon_SRP_Code).length === 1)}
				/>
				<Rakhine
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Rakhine_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(selectedTemple.filter((data) => data.SR_PCODE === Rakhine_SRP_Code).length === 1)}
				/>
				<Shan
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Shan_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(selectedTemple.filter((data) => data.SR_PCODE === Shan_SRP_Code).length === 1)}
				/>
				<Bago
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Bago_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(selectedTemple.filter((data) => data.SR_PCODE === Bago_SRP_Code).length === 1)}
				/>
				<Ayeyarwady
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Ayeyarwady_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(
						selectedTemple.filter((data) => data.SR_PCODE === Ayeyarwady_SRP_Code).length === 1
					)}
				/>
				<Magwe
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Magway_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(selectedTemple.filter((data) => data.SR_PCODE === Magway_SRP_Code).length === 1)}
				/>
				<Mandalay
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Mandalay_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(selectedTemple.filter((data) => data.SR_PCODE === Mandalay_SRP_Code).length === 1)}
				/>
				<Sagaing
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Sagaing_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(selectedTemple.filter((data) => data.SR_PCODE === Sagaing_SRP_Code).length === 1)}
				/>
				<Tanintharyi
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Tanintharyi_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(
						selectedTemple.filter((data) => data.SR_PCODE === Tanintharyi_SRP_Code).length === 1
					)}
				/>
				<Naypyidaw
					onclick={() => {
						const item = temple.filter((data) => data.SR_PCODE === Naypyitaw_SRP_Code);
						this.props.addSelectTemple(item);
					}}
					active={Boolean(selectedTemple.filter((data) => data.SR_PCODE === Naypyitaw_SRP_Code).length === 1)}
				/>
			</WrapMap>
		);
	}
}

function mapStateToProps(state) {
	return {
		temple: state.Temple,
		selectedTemple: state.TempleSelect
	};
}

export default connect(mapStateToProps, {
	addSelectTemple
})(TempleSelectorMap);
