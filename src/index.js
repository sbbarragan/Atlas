import compression from 'compression';
import helmet from 'helmet';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import fs from 'fs';
import { createServer as unsecureServer } from 'http';
import { createServer as secureServer } from 'https';
import bodyParser from 'body-parser';
import { getConfig } from './utils/yml-connect';

import publicRoutes from './routes/public';
import apiRoutes from './routes/api';
import { messageTerminal, addWsServer } from './utils';

const app = express();

// user config
const appConfig = getConfig();

// settings
const port = appConfig.PORT || 3000;
const log = appConfig.LOG || 'dev';

app.use(helmet.hidePoweredBy());
app.use(compression());

app.use('/static', express.static(path.resolve(__dirname, 'public')));

// log request
app.use(morgan(log));

// cors
if (appConfig.MODE && appConfig.MODE === 'development') {
  app.use(cors());
}

// post params parser body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/api', apiRoutes);
app.use('/', publicRoutes);

// 404 - public
app.get('*', (req, res) =>
  res
    .status(404)
    .send(
      `<body style="background-color: #3c3c3c;"><h1 style="font-family: sans-serif; color: #c7c7c7; text-align: center;">404 - Not Found</h1></body>`
    )
);

const key = `${__dirname}/../cert/key.pem`;
const cert = `${__dirname}/../cert/cert.pem`;

// server
const appServer =
  fs &&
  fs.existsSync &&
  key &&
  cert &&
  fs.existsSync(key) &&
  fs.existsSync(cert)
    ? secureServer(
        {
          key: fs.readFileSync(key, 'utf8'),
          cert: fs.readFileSync(cert, 'utf8')
        },
        app
      )
    : unsecureServer(app);

// connect to zeromq websocket
addWsServer(appServer);

appServer.listen(port, () => {
  const config = {
    color: 'green',
    type: port,
    message: 'Server listen in port %s'
  };
  messageTerminal(config);
});
