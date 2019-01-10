import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger'; // middleware
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

// middleware redux-logger:
// const logger = createLogger();

//create store with rootReducer... (if there's only 1 reducer - it can be used directly)
//const store = createStore(searchRobots);
//... and add middleware:
const rootReducer= combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// provider wraps App component and passes down the store
ReactDOM.render(
    <Provider store={ store } >
      <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

// how it would be without redux:
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
