import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { FormattedMessage, injectIntl } from 'react-intl';

// Import Charts
import Doughnut, { DoughnutColor } from '../../../../chartjs/Doughnut';
import Bar, { SameColor, HorBar } from '../../../../chartjs/Bar';

// Import Json
import { mm, en } from './most-diseases.json';
import { en as die_en, mm as die_mm } from './most-die-diseases.json';

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
		const { classes, selected, health_care_person, health_most_diseases, lang } = this.props;

		// Health Care Person
		let health_person = [];
		selected.map((data) => {
			if (health_care_person.filter((person) => person.SR_PCODE === data).length === 1) {
				health_person = [
					...health_person,
					health_care_person.filter((person) => person.SR_PCODE === data)[0]
				];
			}
		});

		let total_health_care_person = {
			HSNB: 0,
			NURSNB: 0,
			PHYSNB: 0,
			POP: 0
		};
		health_person.map((data) => {
			total_health_care_person.HSNB += parseInt(data.HSNB);
			total_health_care_person.NURSNB += parseInt(data.NURSNB);
			total_health_care_person.PHYSNB += parseInt(data.PHYSNB);
		});

		// console.log('health_person', health_person);

		// Health Care Person End

		// Health Most Disease
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
			DISAF01: 0,
			DISAF02: 0,
			DISAF03: 0,
			DISAF04: 0,
			DISAF05: 0,
			DISAF06: 0,
			DISAF07: 0,
			DISAF08: 0,
			DISAF09: 0,
			DISAF10: 0,
			DISAF11: 0,
			DISAF12: 0,
			DISAF13: 0,
			DISAF14: 0,
			DISAF15: 0,
			DISAF16: 0,
			DISAF17: 0,
		};
		most_disease.map((data) => {
			total_health_most_disease.DISAF01 += data.DISAF01 !== undefined ? parseInt(data.DISAF01) : 0;
			total_health_most_disease.DISAF02 += data.DISAF02 !== undefined ? parseInt(data.DISAF02) : 0;
			total_health_most_disease.DISAF03 += data.DISAF03 !== undefined ? parseInt(data.DISAF03) : 0;
			total_health_most_disease.DISAF04 += data.DISAF04 !== undefined ? parseInt(data.DISAF04) : 0;
			total_health_most_disease.DISAF05 += data.DISAF05 !== undefined ? parseInt(data.DISAF05) : 0;
			total_health_most_disease.DISAF06 += data.DISAF06 !== undefined ? parseInt(data.DISAF06) : 0;
			total_health_most_disease.DISAF07 += data.DISAF07 !== undefined ? parseInt(data.DISAF07) : 0;
			total_health_most_disease.DISAF08 += data.DISAF08 !== undefined ? parseInt(data.DISAF08) : 0;
			total_health_most_disease.DISAF09 += data.DISAF09 !== undefined ? parseInt(data.DISAF09) : 0;
			total_health_most_disease.DISAF10 += data.DISAF10 !== undefined ? parseInt(data.DISAF10) : 0;
			total_health_most_disease.DISAF11 += data.DISAF11 !== undefined ? parseInt(data.DISAF11) : 0;
			total_health_most_disease.DISAF12 += data.DISAF12 !== undefined ? parseInt(data.DISAF12) : 0;
			total_health_most_disease.DISAF13 += data.DISAF13 !== undefined ? parseInt(data.DISAF13) : 0;
			total_health_most_disease.DISAF14 += data.DISAF14 !== undefined ? parseInt(data.DISAF14) : 0;
			total_health_most_disease.DISAF15 += data.DISAF15 !== undefined ? parseInt(data.DISAF15) : 0;
			total_health_most_disease.DISAF16 += data.DISAF16 !== undefined ? parseInt(data.DISAF16) : 0;
			total_health_most_disease.DISAF17 += data.DISAF17 !== undefined ? parseInt(data.DISAF17) : 0;
		});

		// console.log('most_disease', total_health_most_disease);

		let most_die_disease = [];
		selected.map((data) => {
			if (health_most_diseases.filter((disease) => disease.SR_PCODE === data).length === 1) {
				most_die_disease = [
					...most_die_disease,
					health_most_diseases.filter((diseases) => diseases.SR_PCODE === data)[0]
				];
			}
		});

		let total_health_most_die_disease = {
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
		most_die_disease.map((data) => {
			total_health_most_die_disease.DISDD01 += data.DISDD01 !== undefined ? parseInt(data.DISDD01) : 0;
			total_health_most_die_disease.DISDD02 += data.DISDD02 !== undefined ? parseInt(data.DISDD02) : 0;
			total_health_most_die_disease.DISDD03 += data.DISDD03 !== undefined ? parseInt(data.DISDD03) : 0;
			total_health_most_die_disease.DISDD04 += data.DISDD04 !== undefined ? parseInt(data.DISDD04) : 0;
			total_health_most_die_disease.DISDD05 += data.DISDD05 !== undefined ? parseInt(data.DISDD05) : 0;
			total_health_most_die_disease.DISDD06 += data.DISDD06 !== undefined ? parseInt(data.DISDD06) : 0;
			total_health_most_die_disease.DISDD07 += data.DISDD07 !== undefined ? parseInt(data.DISDD07) : 0;
			total_health_most_die_disease.DISDD08 += data.DISDD08 !== undefined ? parseInt(data.DISDD08) : 0;
			total_health_most_die_disease.DISDD09 += data.DISDD09 !== undefined ? parseInt(data.DISDD09) : 0;
			total_health_most_die_disease.DISDD10 += data.DISDD10 !== undefined ? parseInt(data.DISDD10) : 0;
			total_health_most_die_disease.DISDD11 += data.DISDD11 !== undefined ? parseInt(data.DISDD11) : 0;
			total_health_most_die_disease.DISDD12 += data.DISDD12 !== undefined ? parseInt(data.DISDD12) : 0;
			total_health_most_die_disease.DISDD13 += data.DISDD13 !== undefined ? parseInt(data.DISDD13) : 0;
			total_health_most_die_disease.DISDD14 += data.DISDD14 !== undefined ? parseInt(data.DISDD14) : 0;
			total_health_most_die_disease.DISDD15 += data.DISDD15 !== undefined ? parseInt(data.DISDD15) : 0;
			total_health_most_die_disease.DISDD16 += data.DISDD16 !== undefined ? parseInt(data.DISDD16) : 0;
			total_health_most_die_disease.DISDD17 += data.DISDD17 !== undefined ? parseInt(data.DISDD17) : 0;
		});

		return (
			<Grid container alignContent={'center'} justify={'center'} spacing={8}>
				{/* Health Care Person */}
				<Grid item xs={12} sm={6} md={6} lg={6}>
					<Paper className={classes.paper}>
						<h2 className="mm-font" style={{ marginTop: 0 }}>
							<FormattedMessage id={'app.health_care_person'} defaultMessage={'Health Care Person'} />
						</h2>
						{health_person.length === 0 ? (
							<p> Waiting ... </p>
						) : (
							<HorBar
								data={{
									datasets: [
										{
											data: [
												total_health_care_person.HSNB,
												total_health_care_person.NURSNB,
												total_health_care_person.PHYSNB
											],
											backgroundColor: [
												'rgba(36, 215, 255, 0.5)',
												'rgba(255, 71, 71, 0.5)',
												'rgba(255, 142, 36, 0.5)'
											]
										}
									],
									labels:
										lang === 'mm'
											? [ 'လ/ထကျန်းမာရေးမှူးဦး', 'သူနာပြုဦးရေ', 'ဆရာဝန်ဦးရေ' ]
											: [ 'Health Staff No', 'Nurse No', 'Doctor No' ]
								}}
							/>
						)}
					</Paper>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6}>
					<Paper className={classes.paper}>
						<h2 className="mm-font" style={{ marginTop: 0 }}>
							<FormattedMessage id={'app.health_care_population'} defaultMessage={'Population'} />
						</h2>
						{health_person.length === 0 ? (
							<p> Waiting ... </p>
						) : (
							<Bar
								data={{
									datasets: [
										{
											data: health_person.map((data) => data.POP),
											backgroundColor: health_person.map((data) => SameColor)
										}
									],
									labels:
										lang === 'mm'
											? health_person.map((data) => data.SR_MM_NAME)
											: health_person.map((data) => data.SR_NAME)
								}}
							/>
						)}
					</Paper>
				</Grid>
				{/* Health Care Person End */}

				{/* Most Diseases */}
				<Grid item xs={12} sm={8} md={6} lg={6}>
					<Paper className={classes.paper}>
						<h2 className="mm-font">
							<FormattedMessage id={'app.health_care_most_disease'} defaultMessage={'Population'} />
						</h2>
						{health_person.length === 0 ? (
							<p> Waiting ... </p>
						) : (
							<Doughnut
								data={{
									datasets: [
										{
											data: [
												total_health_most_disease.DISAF01,
												total_health_most_disease.DISAF02,
												total_health_most_disease.DISAF03,
												total_health_most_disease.DISAF04,
												total_health_most_disease.DISAF05,
												total_health_most_disease.DISAF06,
												total_health_most_disease.DISAF07,
												total_health_most_disease.DISAF08,
												total_health_most_disease.DISAF09,
												total_health_most_disease.DISAF10,
												total_health_most_disease.DISAF11,
												total_health_most_disease.DISAF12,
												total_health_most_disease.DISAF13,
												total_health_most_disease.DISAF14,
												total_health_most_disease.DISAF15,
												total_health_most_disease.DISAF16,
												total_health_most_disease.DISAF17,
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
				{/* Most Diseases End */}

				{/* Dead Ratio */}
				<Grid item xs={12} sm={8} md={6} lg={6}>
					<Paper className={classes.paper}>
						<h2 className="mm-font">
							<FormattedMessage id={'app.health_care_most_die_disease'} defaultMessage={'Population'} />
						</h2>
						{health_person.length === 0 ? (
							<p> Waiting ... </p>
						) : (
							<Doughnut
								data={{
									datasets: [
										{
											data: [
												total_health_most_die_disease.DISDD01,
												total_health_most_die_disease.DISDD02,
												total_health_most_die_disease.DISDD03,
												total_health_most_die_disease.DISDD04,
												total_health_most_die_disease.DISDD05,
												total_health_most_die_disease.DISDD06,
												total_health_most_die_disease.DISDD07,
												total_health_most_die_disease.DISDD08,
												total_health_most_die_disease.DISDD09,
												total_health_most_die_disease.DISDD10,
												total_health_most_die_disease.DISDD11,
												total_health_most_die_disease.DISDD12,
												total_health_most_die_disease.DISDD13,
												total_health_most_die_disease.DISDD14,
												total_health_most_die_disease.DISDD15,
												total_health_most_die_disease.DISDD16,
												total_health_most_die_disease.DISDD17
											],
											backgroundColor: DoughnutColor
										}
									],
									labels:
										lang === 'mm'
											? Object.keys(die_mm).map((data) => die_mm[data])
											: Object.keys(die_en).map((data) => die_en[data])
								}}
							/>
						)}
					</Paper>
				</Grid>
				{/* Dead Ratio End */}
			</Grid>
		);
	}
}
function mapStateToProps(state) {
	return {
		selected: state.HealthCareSelect,
		health_care_person: state.HealthCarePersonal,
		health_most_diseases: state.HealthCareMostDiseases,
		lang: state.Language.lang
	};
}

export default injectIntl(connect(mapStateToProps, null)(withStyles(styles)(Chart)));
