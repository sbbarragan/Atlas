import React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import root from 'window-or-global';
import rootReducer from './reducers';
import Routes from './components/routes';
import { reduxContext } from './constants';

const App = ({ location, context }) => {
  const composeEnhancer =
    (root && root.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
  );
  console.log('TEST-context', reduxContext);
  let rtn = (
    <Provider store={store} context={reduxContext}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );

  if (location && context) {
    rtn = (
      <StaticRouter location={location} context={context}>
        <Routes />
      </StaticRouter>
    );
  }
  return rtn;
};

// by add redux need use <App />, redux is a wrapper for this
export default App;
