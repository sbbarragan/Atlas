import React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
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

// by add redux need use <App />, redux is a wrapper for this
export default App;
