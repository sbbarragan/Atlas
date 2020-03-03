const React = require('react');
const express = require('express');
const { renderToString } = require('react-dom/server');
const root = require('window-or-global');
const { createStore, compose, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const classnames = require('classnames');
const rootReducer = require('../public/reducers');
const App = require('../public/app').default;
const { getConfig } = require('../utils/yml-connect');
const {
  includeMAPSJSbyHTML,
  includeJSbyHTML,
  includeCSSbyHTML
} = require('../utils');

const router = express.Router();

router.get('*', (req, res) => {
  const context = {};
  const pathPublic = `${__dirname}/public`;

  const composeEnhancer =
    (root && root.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(
    rootReducer(getConfig),
    composeEnhancer(applyMiddleware(thunk))
  );

  const component = renderToString(
    <App location={req.url} context={context} store={store} />
  );

  const html = `
  <!doctype html>
    <html>
    <head>
      <link rel='shortcut icon' type='image/png' href='/static/favicon.png' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      ${includeCSSbyHTML(pathPublic)}
    </head>
    <body>
      <div id="root" class="${classnames(
        'container-fluid',
        'd-flex',
        'flex-column',
        'min-vh-100',
        'justify-content-between'
      )}">${component}</div>
      <script id="preloadState">
        window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(
          /</g,
          '\\u003c'
        )}
      </script>
      ${includeJSbyHTML(pathPublic) + includeMAPSJSbyHTML(pathPublic)}
    </body>
    </html>
  `;

  if (context.url) {
    res.writeHead(301, { Location: context.url });
    res.end();
  } else {
    res.send(html);
  }
});
module.exports = router;
