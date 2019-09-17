import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import root from 'window-or-global';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../public/reducers';
import App from '../public/app';
import { includeMAPSJSbyHTML, includeJSbyHTML } from '../utils';

const router = express.Router();

router.get('*', (req, res) => {
  const context = {};
  const pathPublic = `${__dirname}/public`;

  const composeEnhancer =
    (root && root.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
  );

  const component = renderToString(
    <App location={req.url} context={context} store={store} />
  );

  const html = `
  <!doctype html>
    <html>
    <head>
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
    </head>
    <body>
      <div id="root">${component}</div>
      <script>
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
