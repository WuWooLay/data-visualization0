import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// Dispatch
import { fetchTemple } from '../../../action/temple';

// Import Component
import MapTabs from './MapTabs/MapTabs';
import Chart from './Chart/Chart';

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

class Temple extends Component {
	componentWillMount() {
		console.log('fetchTemple');
		this.props.fetchTemple();
	}

	render() {
		const { classes, temple } = this.props;

		return (
			<Grid container spacing={8}>
				<Grid item xs={12} sm={6} lg={4}>
					{temple.length === 0 ? <LinearProgress /> : ''}
					<MapTabs />
				</Grid>

				<Grid item sm={6} lg={8}>
					<Chart />
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
export default connect(mapStateToProps, { fetchTemple })(withStyles(styles)(Temple));
