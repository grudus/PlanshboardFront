/* eslint-disable no-underscore-dangle,react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';


import App from './app/AppComponent';
import reducer from './app/reducers/allReducers';
/** @namespace window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ */

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

const store = createStore(
  reducer,
  enhancer,
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root'),
);
