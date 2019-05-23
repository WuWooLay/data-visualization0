import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material Ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';

// Material Icons
import LanguageIcon from '@material-ui/icons/Language';

// Translate Message
import { FormattedMessage } from 'react-intl';
// Actions
import { setLanguage } from '../../action/language';

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	navBackground: {
		background: 'linear-gradient(40deg, #ff6ec4 , #7873f5 )'
	}
};

class ButtonAppBar extends Component {
	state = {
		anchorEl: null
	};

	handleClick = (event) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	setLanguageAndHandleClose = (lang) => {
		this.props.setLanguage(lang);
		this.setState({
			anchorEl: null
		});
	};

	render() {
		const { classes, lang } = this.props;
		let { anchorEl } = this.state;

		return (
			<div className={classes.root}>
				<AppBar className={classes.navBackground}>
					<Toolbar>
						<Typography variant="h6" color="inherit" className={lang === 'mm' ? `${classes.grow} mm-font` : `${classes.grow}`}>
							<FormattedMessage
								id="app.title"
								defaultMessage="Welcome to BarNyar"
								description="Welcome header on app main page"
							/>
						</Typography>

						{/* Language SetUp */}
						<Tooltip
							title={
								<FormattedMessage
									id="app.change_language"
									defaultMessage="Changing Language"
									description="Changing Language Tranlsating"
								/>
							}
						>
							<IconButton
								color="inherit"
								aria-label="Language"
								aria-haspopup="true"
								onClick={this.handleClick}
							>
								<LanguageIcon />
							</IconButton>
						</Tooltip>

						<ClickAwayListener onClickAway={() => console.log('OnClickAway')}>
							<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
								<MenuItem
									onClick={() => {
										this.setLanguageAndHandleClose('en');
									}}
								>
									English
								</MenuItem>
								<MenuItem
									onClick={() => {
										this.setLanguageAndHandleClose('mm');
									}}
									className="mm-font"
								>
									ျမန္မာ
								</MenuItem>
							</Menu>
						</ClickAwayListener>
						{/* Language SetUp End */}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		lang: state.Language.lang
	}),
	{ setLanguage }
)(withStyles(styles)(ButtonAppBar));
