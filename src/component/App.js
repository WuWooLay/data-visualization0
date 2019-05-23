import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';

// Translate Provider
import { IntlProvider } from 'react-intl';
import messages_en from '../translations/en.json';
import messages_mm from '../translations/mm.json';

const messages = {
	en: messages_en,
	mm: messages_mm
};

class App extends Component {
	render() {
		return (
			<IntlProvider locale="en" messages={messages[this.props.language]}>
				<Navbar />
			</IntlProvider>
		);
	}
}

function mapStateToProps (state) {
	return ({
		language: state.Language.lang
	})
}

export default connect(mapStateToProps, null)(App);
