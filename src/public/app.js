import React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { TranslateProvider } from './components/HOC';
import Routes from './components/routes';

const App = ({ location, context, store }) => {
  // browser build
  let rtn = (
    <BrowserRouter>
      <TranslateProvider>
        <Routes />
      </TranslateProvider>
    </BrowserRouter>
  );

  // server build
  if (location && context) {
    rtn = (
      <StaticRouter location={location} context={context}>
        <TranslateProvider>
          <Routes />
        </TranslateProvider>
      </StaticRouter>
    );
  }
  return <Provider store={store}>{rtn}</Provider>;
};

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
