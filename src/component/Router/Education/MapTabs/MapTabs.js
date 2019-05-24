import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

// Translate
import { FormattedMessage } from 'react-intl';

import { makeStyles, useTheme } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// Icons
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LooksOneIcon from '@material-ui/icons/LooksOne';

function TabContainer({ children, dir }) {
	return (
		<Typography component="div" dir={dir} style={{ padding: '1em' }}>
			{children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired
};

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#ffffff'
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
			<AppBar position="static" color="#ffffff">
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

				<TabContainer> Myanamr Map </TabContainer>
				<TabContainer> One Select Map </TabContainer>

			</SwipeableViews>
			{/* SwipeableViews End*/}
		</div>
	);
}

export default MapTabs;
