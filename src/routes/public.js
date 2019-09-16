import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from '../public/app';
import { includeMAPSJSbyHTML, includeJSbyHTML } from '../utils';

const router = express.Router();

router.get('*', (req, res) => {
  const context = {};
  const pathPublic = `${__dirname}/public`;

  const component = renderToString(
    <App location={req.url} context={context} />
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
