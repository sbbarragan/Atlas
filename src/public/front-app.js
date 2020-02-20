import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import root from 'window-or-global';
import rootReducer from '../public/reducers';
import App from './app';

const preloadedState = root.__PRELOADED_STATE__;

delete root.__PRELOADED_STATE__;

const store = createStore(
  rootReducer(),
  preloadedState,
  root.__REDUX_DEVTOOLS_EXTENSION__ && root.__REDUX_DEVTOOLS_EXTENSION__()
);

document.getElementById('preloadState').remove();

hydrate(<App store={store} />, document.getElementById('root'));
