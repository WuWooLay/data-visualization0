import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar/Navbar';

// BrowserRouter
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Translate Provider
import { IntlProvider } from 'react-intl';
import messages_en from '../translations/en.json';
import messages_mm from '../translations/mm.json';
import LeftSideBar from './Navbar/LeftSideBar/LeftSideBar';

// Transition
import { TransitionGroup, Transition, CSSTransition } from 'react-transition-group';

// Import Css
import './App.css';

// Router Conponents
import Education from './Router/Education/Education';

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

					<div className="RouterContainer">
						<Route
							render={({ location }) => (
								<TransitionGroup component={null}>
									<CSSTransition
										key={location.key}
										timeout={{ enter: 750, exit: 150 }}
										classNames="fade"
									>
										<Switch location={location}>
											<Route path="/" exact component={() => <h1> Home </h1>} />
											<Route path="/overview" exact component={() => <h1> Overview </h1>} />
											<Route path="/education" exact component={Education} />
											<Route render={() => <h2> Page Not Found 404 </h2>} />
										</Switch>
									</CSSTransition>
								</TransitionGroup>
							)}
						/>
					</div>
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
