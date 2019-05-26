import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './index.css';

// Theme Set
import { theme } from './material-ui';
import { MuiThemeProvider } from '@material-ui/core/styles';

// Translate Provider
import { addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';

// Redux And Action
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from './reducer';
import { fetchTemple } from './action/temple';
import {
	fetchHealthCarePersonal,
	fetchHealthCareMostDiseases,
	fetchHealthCareHospital,
	fetchHealthCareClinics,
	fetchHealthCareRuralHealth,
	fetchHealthCareWalkingDisability,
	fetchHealthCareSeeingDisability,
	fetchHealthCareHearingDisability,
	fetchHealthCareRememberingDisability,
	selectWholeHealthCare
} from './action/healthcare';
import { fetchRadio } from './action/radio';
import { fetchPh } from './action/phone';
// import { addSomething } from './action';

addLocaleData([ ...locale_en ]);

const store = createStore(RootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
// store.dispatch(addSomething());

// HealthCare List
store.dispatch((dispatch) => {
	dispatch(fetchTemple());
	dispatch(fetchHealthCarePersonal());
	dispatch(fetchHealthCareMostDiseases());
	dispatch(fetchHealthCareHospital());
	dispatch(fetchHealthCareClinics());
	dispatch(fetchHealthCareRuralHealth());
	dispatch(fetchHealthCareWalkingDisability());
	dispatch(fetchHealthCareSeeingDisability());
	dispatch(fetchHealthCareHearingDisability());
	dispatch(fetchHealthCareRememberingDisability());
	dispatch(fetchRadio());
	dispatch(fetchPh());
	dispatch(selectWholeHealthCare());
});

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
