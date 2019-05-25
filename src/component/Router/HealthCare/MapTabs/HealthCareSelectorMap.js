import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Dispatch
import { addSelectHelathCare } from '../../../../action/healthcare';

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

class HealthCareSelectorMap extends Component {
	render() {
		// console.log(this.props);
		let { addSelectHelathCare, selectedHealthCare } = this.props;
		return (
			<WrapMap>
				<Kachin
					onclick={() => addSelectHelathCare(Kachin_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Kachin_SRP_Code).length)}
				/>
				<Kayar
					onclick={() => addSelectHelathCare(Kayah_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Kayah_SRP_Code).length)}
				/>
				<Kayin
					onclick={() => addSelectHelathCare(Kayin_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Kayin_SRP_Code).length)}
				/>
				<Chin
					onclick={() => addSelectHelathCare(Chin_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Chin_SRP_Code).length)}
				/>
				<Yangon
					onclick={() => addSelectHelathCare(Yangon_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Yangon_SRP_Code).length)}
				/>
				<Mon
					onclick={() => addSelectHelathCare(Mon_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Mon_SRP_Code).length)}
				/>
				<Rakhine
					onclick={() => addSelectHelathCare(Rakhine_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Rakhine_SRP_Code).length)}
				/>
				<Shan
					onclick={() => addSelectHelathCare(Shan_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Shan_SRP_Code).length)}
				/>
				<Bago
					onclick={() => addSelectHelathCare(Bago_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Bago_SRP_Code).length)}
				/>
				<Ayeyarwady
					onclick={() => addSelectHelathCare(Ayeyarwady_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Ayeyarwady_SRP_Code).length)}
				/>
				<Magwe
					onclick={() => addSelectHelathCare(Magway_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Magway_SRP_Code).length)}
				/>
				<Mandalay
					onclick={() => addSelectHelathCare(Mandalay_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Mandalay_SRP_Code).length)}
				/>
				<Sagaing
					onclick={() => addSelectHelathCare(Sagaing_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Sagaing_SRP_Code).length)}
				/>
				<Tanintharyi
					onclick={() => addSelectHelathCare(Tanintharyi_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Tanintharyi_SRP_Code).length)}
				/>
				<Naypyidaw
					onclick={() => addSelectHelathCare(Naypyitaw_SRP_Code)}
					active={Boolean(selectedHealthCare.filter((data) => data === Naypyitaw_SRP_Code).length)}
				/>
			</WrapMap>
		);
	}
}

function mapStateToProps(state) {
	return {
		selectedHealthCare: state.HealthCareSelect
	};
}

export default connect(mapStateToProps, {
	addSelectHelathCare
})(HealthCareSelectorMap);
