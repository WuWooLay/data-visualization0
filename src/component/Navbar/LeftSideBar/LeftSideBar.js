import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';

// Importing Css
import './LeftSideBar.css';
// Importing Data
import dataJson from './leftside.json';

class LeftSideBar extends Component {
	state = {
		redirect: false
	};

	render() {
		// console.log(this.props);

		// Check Language
		const { lang } = this.props;

		if (this.state.redirect) {
			return <Redirect push to="/" />;
		}

		return (
			<ul className="LeftNav">
				{dataJson.map((data, index) => {
					return (
						<li key={index}>
							<Link to={`${data.path}`}>
								<span className={lang === 'mm' ? 'LeftNav-Dispear mm-font' : 'LeftNav-Dispear'}>
									<FormattedMessage
										id={data.language}
										defaultMessage={data.name}
										description="Welcome header on app main page"
									/>
								</span>
								<span className="Icon">
									<img src={`${process.env.PUBLIC_URL}${data.icon}`} alt="" />
								</span>
							</Link>
						</li>
					);
				})}

				{/* <li id="NavLeft-None">
					<span className={lang === 'mm' ? 'LeftNav-Dispear mm-font' : 'LeftNav-Dispear'}>
						<FormattedMessage
							id={'app.question'}
							defaultMessage={'Question'}
							description="Welcome Question For Nav"
						/>
					</span>
					<span className="Icon">
						<img src={`${process.env.PUBLIC_URL}/svg/navleft/question.svg`} alt="" />
					</span>
				</li> */}
			</ul>
		);
	}
}

export default connect(
	(state) => ({
		lang: state.Language.lang
	}),
	null
)(LeftSideBar);
