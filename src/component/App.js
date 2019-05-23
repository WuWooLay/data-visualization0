import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar/Navbar';

// BrowserRouter
import { BrowserRouter } from 'react-router-dom';

// Translate Provider
import { IntlProvider } from 'react-intl';
import messages_en from '../translations/en.json';
import messages_mm from '../translations/mm.json';
import LeftSideBar from './Navbar/LeftSideBar/LeftSideBar';

// Import Css
import './App.css';

const messages = {
	en: messages_en,
	mm: messages_mm
};

class App extends Component {
	render() {
		return (
			<IntlProvider locale="en" messages={messages[this.props.language]}>
				{/* Left & MapContainer */}
				<BrowserRouter>
					<Navbar />

					<div className="SiteContainer">
						<LeftSideBar />
					</div>

					{/* Router Container */}
					{/* Router Container End*/}
					
				</BrowserRouter>
				{/* Left & MapContainer ENd */}
			</IntlProvider>
		);
	}
}

function mapStateToProps(state) {
	return {
		language: state.Language.lang
	};
}

export default connect(mapStateToProps, null)(App);
