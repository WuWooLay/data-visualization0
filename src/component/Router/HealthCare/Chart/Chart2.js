import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { FormattedMessage, injectIntl } from 'react-intl';

// Import Charts
import Doughnut, { DoughnutColor } from '../../../../chartjs/Doughnut';
import Bar from '../../../../chartjs/Bar';

// Json
import HospitalJson from './hospital.json';
import RadioJson from './radio.json';
import { en, mm } from './most-die-diseases.json';

const styles = (theme) => {
	return {
		root: {
			flexGrow: 1
		},
		paper: {
			padding: theme.spacing.unit,
			textAlign: 'center',
			color: theme.palette.text.secondary
		},
		marginTop: {
			marginTop: 5
		}
	};
};

class Chart extends Component {
	render() {
		const { classes, selected, health_care_hospital, radio, phone, health_most_diseases, lang } = this.props;

		let health_hospital = [];
		selected.map((data) => {
			if (health_care_hospital.filter((hospital) => hospital.SR_PCODE === data).length === 1) {
				health_hospital = [
					...health_hospital,
					health_care_hospital.filter((hospital) => hospital.SR_PCODE === data)[0]
				];
			}
		});

		let total_health_hospital = {
			HOSPNB: 0,
			HOSPBDNB: 0,
			HOSPGVNB: 0,
			HOSPGVBDNB: 0,
			HOSPPVNB: 0,
			HOSPPVBD: 0
		};
		health_hospital.map((data) => {
			total_health_hospital.HOSPNB += parseInt(data.HOSPNB);
			total_health_hospital.HOSPBDNB += parseInt(data.HOSPBDNB);
			total_health_hospital.HOSPGVNB += parseInt(data.HOSPGVNB);
			total_health_hospital.HOSPGVBDNB += parseInt(data.HOSPGVBDNB);
			total_health_hospital.HOSPPVNB += parseInt(data.HOSPPVNB);
			total_health_hospital.HOSPPVBD += parseInt(data.HOSPPVBD);
		});

		let get_radio = [];
		selected.map((data) => {
			if (radio.filter((hospital) => hospital.SR_PCODE === data).length === 1) {
				get_radio = [ ...get_radio, radio.filter((hospital) => hospital.SR_PCODE === data)[0] ];
			}
		});

		let total_ratio = {
			PCT_RADIO_T: 0
		};
		get_radio.map((data) => {
			total_ratio.PCT_RADIO_T += parseInt(data.PCT_RADIO_T);
		});

		let get_phone = [];
		selected.map((data) => {
			if (phone.filter((phones) => phones.SR_PCODE === data).length === 1) {
				get_phone = [ ...get_phone, phone.filter((phones) => phones.SR_PCODE === data)[0] ];
			}
		});

		let total_phone = {
			PCT_PHONE_U: 0,
			PCT_PHONE_R: 0,
			Total_Phone: 0
		};

		get_phone.map((data) => {
			total_phone.PCT_PHONE_U += parseInt(data.PCT_PHONE_U);
			total_phone.PCT_PHONE_R += parseInt(data.PCT_PHONE_R);
			total_phone.Total_Phone += total_phone.PCT_PHONE_U + total_phone.PCT_PHONE_R;
		});

		//

		let most_disease = [];
		selected.map((data) => {
			if (health_most_diseases.filter((disease) => disease.SR_PCODE === data).length === 1) {
				most_disease = [
					...most_disease,
					health_most_diseases.filter((diseases) => diseases.SR_PCODE === data)[0]
				];
			}
		});

		let total_health_most_disease = {
			DISDD01: 0,
			DISDD02: 0,
			DISDD03: 0,
			DISDD04: 0,
			DISDD05: 0,
			DISDD06: 0,
			DISDD07: 0,
			DISDD08: 0,
			DISDD09: 0,
			DISDD10: 0,
			DISDD11: 0,
			DISDD12: 0,
			DISDD13: 0,
			DISDD14: 0,
			DISDD15: 0,
			DISDD16: 0,
			DISDD17: 0
		};
		most_disease.map((data) => {
			total_health_most_disease.DISDD01 += data.DISDD01 !== undefined ? parseInt(data.DISDD01) : 0;
			total_health_most_disease.DISDD02 += data.DISDD02 !== undefined ? parseInt(data.DISDD02) : 0;
			total_health_most_disease.DISDD03 += data.DISDD03 !== undefined ? parseInt(data.DISDD03) : 0;
			total_health_most_disease.DISDD04 += data.DISDD04 !== undefined ? parseInt(data.DISDD04) : 0;
			total_health_most_disease.DISDD05 += data.DISDD05 !== undefined ? parseInt(data.DISDD05) : 0;
			total_health_most_disease.DISDD06 += data.DISDD06 !== undefined ? parseInt(data.DISDD06) : 0;
			total_health_most_disease.DISDD07 += data.DISDD07 !== undefined ? parseInt(data.DISDD07) : 0;
			total_health_most_disease.DISDD08 += data.DISDD08 !== undefined ? parseInt(data.DISDD08) : 0;
			total_health_most_disease.DISDD09 += data.DISDD09 !== undefined ? parseInt(data.DISDD09) : 0;
			total_health_most_disease.DISDD10 += data.DISDD10 !== undefined ? parseInt(data.DISDD10) : 0;
			total_health_most_disease.DISDD11 += data.DISDD11 !== undefined ? parseInt(data.DISDD11) : 0;
			total_health_most_disease.DISDD12 += data.DISDD12 !== undefined ? parseInt(data.DISDD12) : 0;
			total_health_most_disease.DISDD13 += data.DISDD13 !== undefined ? parseInt(data.DISDD13) : 0;
			total_health_most_disease.DISDD14 += data.DISDD14 !== undefined ? parseInt(data.DISDD14) : 0;
			total_health_most_disease.DISDD15 += data.DISDD15 !== undefined ? parseInt(data.DISDD15) : 0;
			total_health_most_disease.DISDD16 += data.DISDD16 !== undefined ? parseInt(data.DISDD16) : 0;
			total_health_most_disease.DISDD17 += data.DISDD17 !== undefined ? parseInt(data.DISDD17) : 0;
		});

		// console.log('Tay B', total_health_most_disease);
		return (
			<Grid container spacing={8} className={classes.marginTop}>
				{/* Total Hospital */}
				<Grid item xs={12} sm={6} lg={6} className={classes.marginBottom}>
					<Paper className={classes.paper}>
						<h2 className="mm-font">
							<FormattedMessage id={'app.health_hospital'} defaultMessage={'Population'} />
						</h2>
						{health_hospital.length === 0 ? (
							<p> Waiting ... </p>
						) : (
							<Bar
								data={{
									datasets: [
										{
											data: [
												total_health_hospital.HOSPNB,
												total_health_hospital.HOSPBDNB,
												total_health_hospital.HOSPGVNB,
												total_health_hospital.HOSPGVBDNB,
												total_health_hospital.HOSPPVNB,
												total_health_hospital.HOSPPVBD
											],
											backgroundColor: DoughnutColor
										}
									],
									labels:
										lang === 'mm'
											? [
													HospitalJson['HOSPNB'],
													HospitalJson['HOSPBDNB'],
													HospitalJson['HOSPGVNB'],
													HospitalJson['HOSPGVBDNB'],
													HospitalJson['HOSPPVNB'],
													HospitalJson['HOSPPVBD']
												]
											: [ 'HOSPNB', 'HOSPBDNB', 'HOSPGVNB', 'HOSPGVBDNB', 'HOSPPVNB', 'HOSPPVBD' ]
								}}
							/>
						)}
					</Paper>
				</Grid>
				{/* Total Hospital End */}

				{/* Dead Ratio */}
				<Grid item xs={12} sm={6} lg={6}>
					<Paper className={classes.paper}>
						<h2 className="mm-font">
							<FormattedMessage id={'app.health_care_most_die_disease'} defaultMessage={'Population'} />
						</h2>
						{total_health_most_disease.length === 0 ? (
							<p> Waiting ... </p>
						) : (
							<Doughnut
								data={{
									datasets: [
										{
											data: [
												total_health_most_disease.DISDD01,
												total_health_most_disease.DISDD02,
												total_health_most_disease.DISDD03,
												total_health_most_disease.DISDD04,
												total_health_most_disease.DISDD05,
												total_health_most_disease.DISDD06,
												total_health_most_disease.DISDD07,
												total_health_most_disease.DISDD08,
												total_health_most_disease.DISDD09,
												total_health_most_disease.DISDD10,
												total_health_most_disease.DISDD11,
												total_health_most_disease.DISDD12,
												total_health_most_disease.DISDD13,
												total_health_most_disease.DISDD14,
												total_health_most_disease.DISDD15,
												total_health_most_disease.DISDD16,
												total_health_most_disease.DISDD17
											],
											backgroundColor: DoughnutColor
										}
									],
									labels:
										lang === 'mm'
											? Object.keys(mm).map((data) => mm[data])
											: Object.keys(en).map((data) => en[data])
								}}
							/>
						)}
					</Paper>
				</Grid>
				{/* Dead Ratio End */}

				{/* Total Radio */}
				<Grid item xs={12} sm={6} lg={6} className={classes.marginBottom}>
					<Paper className={classes.paper}>
						<h2 className="mm-font">
							<FormattedMessage id={'app.communication_ratio'} defaultMessage={'Radio Ratio'} />
						</h2>
						{health_hospital.length === 0 ? (
							<p> Waiting ... </p>
						) : (
							<Doughnut
								data={{
									datasets: [
										{
											data: [ total_ratio.PCT_RADIO_T, total_phone.Total_Phone ],
											backgroundColor: DoughnutColor
										}
									],
									labels: lang === 'mm' ? [ 'ရေဒီယို', 'တယ်လီဖုန' ] : [ 'Radio Ratio', 'Phone Ratio' ]
								}}
							/>
						)}
					</Paper>
				</Grid>
				{/* Total Radio End*/}
			</Grid>
		);
	}
}
function mapStateToProps(state) {
	return {
		selected: state.HealthCareSelect,
		health_care_person: state.HealthCarePersonal,
		health_care_hospital: state.HealthCareHospital,
		phone: state.Phone,
		radio: state.Radio,
		lang: state.Language.lang,
		health_most_diseases: state.HealthCareMostDiseases
	};
}

export default injectIntl(connect(mapStateToProps, null)(withStyles(styles)(Chart)));
