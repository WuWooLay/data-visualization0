import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// Dispatch
// import { fetchTemple } from '../../../action/temple';
import { selectWholeHealthCare, clearWholeHealthCare } from '../../../action/healthcare';

// Import Component
import MapTabs from './MapTabs/MapTabs';
import Chart from './Chart/Chart';
import Chart2 from './Chart/Chart2';

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
		marginbottom: {
			marginBottom: 10
		}
	};
};

class HealthCare extends Component {
	render() {
		const { classes, temple } = this.props;

		return (
			<Grid container spacing={8}>
				<Grid item xs={12} sm={6} lg={4} className={classes.marginBottom}>
					<MapTabs
						selectWholeHealthCare={this.props.selectWholeHealthCare}
						clearWholeHealthCare={this.props.clearWholeHealthCare}
					/>
				</Grid>

				<Grid item xs={12} sm={6} lg={8}>
					<Chart />
				</Grid>

				<Grid item xs={12}>
					<Chart2 />
				</Grid>
			</Grid>
		);
	}
}
function mapStateToProps(state) {
	return {};
}
export default connect(mapStateToProps, {
	selectWholeHealthCare,
	clearWholeHealthCare
})(withStyles(styles)(HealthCare));
