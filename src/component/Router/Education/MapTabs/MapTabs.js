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

// Icons
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LooksOneIcon from '@material-ui/icons/LooksOne';

// Get Map
import WholeMap from '../../Map/Select/WholeMap';
import EducationSelectorMap from './EducationSelectorMap';

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

function MapTabs() {
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
						label={<FormattedMessage id={'map.select'} defaultMessage={'Select'} />}
					/>

					<Tab
						className="mm-font"
						icon={<LooksOneIcon />}
						label={<FormattedMessage id={'map.each'} defaultMessage={'Each'} />}
					/>
				</Tabs>
			</AppBar>

			{/* SwipeableViews */}
			<SwipeableViews axis="x" index={value} onChangeIndex={handleChangeIndex}>
				<TabContainer map={true} classes={classes}>
					<EducationSelectorMap />
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
