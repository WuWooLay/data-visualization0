import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// Import Charts
// import PieChart from '../../../AnyChart/PieChart';
import Doughnut, { DoughnutColor } from '../../../../chartjs/Doughnut';
import Pie from '../../../../chartjs/Pie';

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
			<Grid container alignContent={'center'} justify={'center'} spacing={8}>
				<Grid item xs={12} sm={12} lg={6}>
					<Paper className={classes.paper}>
						<h2> Bar Nyar </h2>
						<Doughnut
							data={{
								datasets: [
									{
										data: [
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100)
										],
										backgroundColor: DoughnutColor
									}
								],
								labels: [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue' ]
							}}
						/>
					</Paper>
				</Grid>

				<Grid item xs={12} sm={12} lg={6}>
					<Paper className={classes.paper}>
						<h2> Bar Nyar </h2>
						<Doughnut
							data={{
								datasets: [
									{
										data: [
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100)
										],
										backgroundColor: DoughnutColor
									}
								],
								labels: [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue' ]
							}}
						/>
					</Paper>
				</Grid>

				<Grid item xs={12} sm={12} lg={6}>
					<Paper className={classes.paper}>
						<h2> Bar Nyar </h2>
						<Doughnut
							data={{
								datasets: [
									{
										data: [
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100)
										],
										backgroundColor: DoughnutColor
									}
								],
								labels: [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue' ]
							}}
						/>
					</Paper>
				</Grid>

				<Grid item xs={12} sm={12} lg={6}>
					<Paper className={classes.paper}>
						<h2> Bar Nyar </h2>
						<Doughnut
							data={{
								datasets: [
									{
										data: [
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100),
											Math.round(Math.random() * 100)
										],
										backgroundColor: DoughnutColor
									}
								],
								labels: [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue' ]
							}}
						/>
					</Paper>
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
