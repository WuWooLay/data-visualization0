import React, { Component } from 'react';
import { connect } from 'react-redux';

// Dispatch
import { addEductaionSelector } from '../../../../action/education';

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

class EducationSelectorMap extends Component {
	render() {
		console.log(this.props);
		let { addEductaionSelector, selectedDivision } = this.props;
		return (
			<WrapMap>
				<Kachin
					onclick={() => addEductaionSelector('Kachin')}
					active={Boolean(selectedDivision.filter((data) => data === 'Kachin').length)}
				/>
				<Kayar
					onclick={() => addEductaionSelector('Kayar')}
					active={Boolean(selectedDivision.filter((data) => data === 'Kayar').length)}
				/>
				<Kayin
					onclick={() => addEductaionSelector('Kayin')}
					active={Boolean(selectedDivision.filter((data) => data === 'Kayin').length)}
				/>
				<Chin
					onclick={() => addEductaionSelector('Chin')}
					active={Boolean(selectedDivision.filter((data) => data === 'Chin').length)}
				/>
				<Yangon
					onclick={() => addEductaionSelector('Yangon')}
					active={Boolean(selectedDivision.filter((data) => data === 'Yangon').length)}
				/>
				<Mon
					onclick={() => addEductaionSelector('Mon')}
					active={Boolean(selectedDivision.filter((data) => data === 'Mon').length)}
				/>
				<Rakhine
					onclick={() => addEductaionSelector('Rakhine')}
					active={Boolean(selectedDivision.filter((data) => data === 'Rakhine').length)}
				/>
				<Shan
					onclick={() => addEductaionSelector('Shan')}
					active={Boolean(selectedDivision.filter((data) => data === 'Shan').length)}
				/>
				<Bago
					onclick={() => addEductaionSelector('Bago')}
					active={Boolean(selectedDivision.filter((data) => data === 'Bago').length)}
				/>
				<Ayeyarwady
					onclick={() => addEductaionSelector('Ayeyarwady')}
					active={Boolean(selectedDivision.filter((data) => data === 'Ayeyarwady').length)}
				/>
				<Magwe
					onclick={() => addEductaionSelector('Magwe')}
					active={Boolean(selectedDivision.filter((data) => data === 'Magwe').length)}
				/>
				<Mandalay
					onclick={() => addEductaionSelector('Mandalay')}
					active={Boolean(selectedDivision.filter((data) => data === 'Mandalay').length)}
				/>
				<Sagaing
					onclick={() => addEductaionSelector('Sagaing')}
					active={Boolean(selectedDivision.filter((data) => data === 'Sagaing').length)}
				/>
				<Tanintharyi
					onclick={() => addEductaionSelector('Tanintharyi')}
					active={Boolean(selectedDivision.filter((data) => data === 'Tanintharyi').length)}
				/>
				<Naypyidaw
					onclick={() => addEductaionSelector('Naypyidaw')}
					active={Boolean(selectedDivision.filter((data) => data === 'Naypyidaw').length)}
				/>
			</WrapMap>
		);
	}
}

function mapStateToProps(state) {
	return {
		selectedDivision: state.EducationSelect
	};
}

export default connect(mapStateToProps, {
	addEductaionSelector
})(EducationSelectorMap);
