import React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from './components/routes';

const App = ({ location, context, store }) => {
  let rtn = (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );

  if (location && context) {
    rtn = (
      <StaticRouter location={location} context={context}>
        <Routes />
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
