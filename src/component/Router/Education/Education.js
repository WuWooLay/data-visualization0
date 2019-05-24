import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

import MapTabs from './MapTabs/MapTabs';

const styles = (theme) => {
	console.log('theme', theme);

	return {
		root: {
			flexGrow: 1
		},
		paper: {
			padding: theme.spacing.unit ,
			textAlign: 'center',
			color: theme.palette.text.secondary
		}
	};
};

class Education extends Component {
	render() {
		const { classes } = this.props;

		return (
			<Grid container spacing={8}>

				<Grid item xs={12} sm={6} lg={4}>
					{/* <Paper className={classes.paper}>xs=12</Paper> */}
					<MapTabs />
				</Grid>
				
				<Grid item sm={3} lg={4}>
					<Paper className={classes.paper}>xs=12</Paper>
				</Grid>
                <Grid item sm={3} lg={4}>
					<Paper className={classes.paper}>xs=12</Paper>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Education);
