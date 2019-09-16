import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from '../public/reducers';
import App from './app';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

hydrate(<App store={store} />, document.getElementById('root'));
