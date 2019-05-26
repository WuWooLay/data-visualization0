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

const styles = (theme) => {
	return {
		root: {
			flexGrow: 1
		},
		paper: {
			padding: theme.spacing.unit,
			textAlign: 'center',
			color: theme.palette.text.secondary
		}
	};
};

class Chart extends Component {
	render() {
		const { classes, selected, health_care_hospital, radio, phone, lang } = this.props;

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

		return (
			<Grid container spacing={8}>
				{/* Total Hospital */}
				<Grid item xs={12} sm={6} lg={4} className={classes.marginBottom}>
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

				{/* Total Radio */}
				<Grid item xs={12} sm={6} lg={4} className={classes.marginBottom}>
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
									labels: lang === 'mm'
									? [
										'ရေဒီယို',
										'တယ်လီဖုန'
										]
									: [ 'Radio Ratio', 'Phone Ratio' ]
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
		lang: state.Language.lang
	};
}

export default injectIntl(connect(mapStateToProps, null)(withStyles(styles)(Chart)));
