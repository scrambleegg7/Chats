import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';

import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'

const middleware = [ thunk ];
//if (process.env.NODE_ENV !== 'production') {
middleware.push(createLogger());
//}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
