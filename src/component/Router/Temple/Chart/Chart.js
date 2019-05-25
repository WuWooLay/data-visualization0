import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

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
		}
	};
};

class Chart extends Component {
	render() {
		const { classes, temple } = this.props;

		return (
			<Grid container spacing={8}>
				<Grid item sm={12} lg={6}>
					<Paper className={classes.paper}>xs=12</Paper>
				</Grid>

				<Grid item sm={12} lg={6}>
					<Paper className={classes.paper}>xs=12</Paper>
				</Grid>
			</Grid>
		);
	}
}
function mapStateToProps(state) {
	return {
		temple: state.Temple
	};
}
export default connect(mapStateToProps, null)(withStyles(styles)(Chart));
