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
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from './reducer';
import { addSomething } from './action';

addLocaleData([ ...locale_en ]);

const store = createStore(RootReducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch(addSomething());

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
				<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
