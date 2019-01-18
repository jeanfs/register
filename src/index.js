import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './redux/reducers';

// App
import App from './App';
import * as serviceWorker from './serviceWorker';

// Router
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, {}, composeEnhancers());

ReactDOM.render(
    <Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
