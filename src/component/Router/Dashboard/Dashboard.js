import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// Import SVG
import EducationSVG from './svg/Education.svg';
import HealthCare from './svg/HealthCare.svg';
import Pagoda from './svg/Pagoda.svg';

const styles = (theme) => {
	// console.log('theme', theme);

	return {
		root: {
			flexGrow: 1
		},
		paper: {
			padding: theme.spacing.unit,
			textAlign: 'center',
			color: theme.palette.text.secondary
		},
		svg: {
			width: '100%',
			maxWidth: 80,
			marginBottom: 10
		},
		aTag: {
			textDecoration: 'none'
		}
	};
};

class Education extends Component {
	render() {
		const { classes, lang } = this.props;

		return (
			<Grid container spacing={8}>
				<Grid item xs={12} sm={4} lg={4}>
					<Paper className={classes.paper}>
						<div>
							<h3 className={lang === 'mm' ? 'mm-font' : ''}>
								<FormattedMessage id={'app.healthcare'} defaultMessage={'Health Care'} />
							</h3>
							<img className={classes.svg} src={HealthCare} alt="Home Link" />
						</div>
						<NavLink to="/healthcare" className={classes.aTag}>
							<Button variant="outlined" color="primary">
								Go
							</Button>
						</NavLink>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={4} lg={4}>
					<Paper className={classes.paper}>
						<div>
							<h3 className={lang === 'mm' ? 'mm-font' : ''}>
								<FormattedMessage id={'app.temple'} defaultMessage={'Health Care'} />
							</h3>
							<img className={classes.svg} src={Pagoda} alt="Home Link" />
						</div>
						<NavLink to="/temple" className={classes.aTag}>
							<Button variant="outlined" color="primary">
								Go
							</Button>
						</NavLink>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={4} lg={4}>
					<Paper className={classes.paper}>
						<div>
							<h3 className={lang === 'mm' ? 'mm-font' : ''}>
								<FormattedMessage id={'app.education'} defaultMessage={'Health Care'} />
							</h3>
							<img className={classes.svg} src={EducationSVG} alt="Home Link" />
						</div>
						<NavLink to="/education" className={classes.aTag}>
							<Button variant="outlined" color="primary">
								Go
							</Button>
						</NavLink>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}

export default connect(
	(state) => ({
		lang: state.Language.lang
	}),
	{}
)(withStyles(styles)(Education));
