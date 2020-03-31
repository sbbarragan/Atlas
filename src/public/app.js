import React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { TranslateProvider } from './components/HOC';
import Router from './components/router';

const App = ({ location, context, store }) => (
  <Provider store={store}>
    {location && context ? (
      // server build
      <StaticRouter location={location} context={context}>
        <TranslateProvider>
          <Router />
        </TranslateProvider>
      </StaticRouter>
    ) : (
      // browser build
      <BrowserRouter>
        <TranslateProvider>
          <Router />
        </TranslateProvider>
      </BrowserRouter>
    )}
  </Provider>
);

App.propTypes = {
  location: PropTypes.string,
  context: PropTypes.shape({}),
  store: PropTypes.shape({})
};

App.defaultProps = {
  location: '',
  context: {},
  store: {}
};

export default App;
