import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

// Translate
import { FormattedMessage } from 'react-intl';

import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

// Icons
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LooksOneIcon from '@material-ui/icons/LooksOne';

// Get Map
import WholeMap from '../../Map/Select/WholeMap';
import HealthCareSelectorMap from './HealthCareSelectorMap';

function TabContainer({ children, map, classes }) {
	return (
		<Typography component="div" className={map ? classes.maxWidth200 : ''}>
			{children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
};

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#ffffff'
	},
	maxWidth200: {
		maxWidth: 200,
		margin: '0 auto'
	}
}));

function MapTabs(props) {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	function handleChangeIndex(index) {
		setValue(index);
	}

	return (
		<div className={classes.root}>
			<AppBar position="static" color="inherit">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					variant="fullWidth"
				>
					<Tab
						className="mm-font"
						icon={<CheckBoxIcon />}
						label={<FormattedMessage id="temple.select" defaultMessage={'Select'} />}
					/>

					<Tab
						className="mm-font"
						icon={<LooksOneIcon />}
						label={<FormattedMessage id="temple.each" defaultMessage={'Each'} />}
					/>
				</Tabs>
			</AppBar>

			{/* SwipeableViews */}
			<SwipeableViews axis="x" index={value} onChangeIndex={handleChangeIndex}>
				<TabContainer map={true} classes={classes}>
					<HealthCareSelectorMap />
					<div style={{ marginBottom: 40 }} />
					<Button
						onClick={() => {
							props.selectWholeHealthCare();
						}}
						className="mm-font"
						variant="outlined"
						color="primary"
						size="small"
						style={{ position: 'absolute', left: 0, bottom: 0 }}
					>
						<CheckBoxIcon />
						<FormattedMessage id="app.select_all" defaultMessage={'Select All'} />
					</Button>
					<Button
						onClick={() => {
							props.clearWholeHealthCare();
						}}
						className="mm-font"
						variant="outlined"
						color="primary"
						size="small"
						style={{ position: 'absolute', right: 0, bottom: 0 }}
					>
						<FormattedMessage id="app.clear_all" defaultMessage={'Clear All'} />
					</Button>
				</TabContainer>

				<TabContainer map={true} classes={classes}>
					<WholeMap />
				</TabContainer>
			</SwipeableViews>
			{/* SwipeableViews End*/}
		</div>
	);
}

export default MapTabs;
