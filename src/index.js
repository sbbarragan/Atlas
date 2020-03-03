const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const fs = require('fs-extra');
const { createServer: unsecureServer } = require('http');
const { createServer: secureServer } = require('https');
const bodyParser = require( 'body-parser');
const { getConfig } = require( './utils/yml-connect');
const { defaultConfigLog, defaultTypeLog }  = require( './config/defaults');
const publicRoutes = require( './routes/public');
const apiRoutes = require( './routes/api');
const { messageTerminal, addWsServer }  = require( './utils');

const app = express();

// user config
const appConfig = getConfig();

// settings
const port = appConfig.PORT || 3000;
const userLog = appConfig.LOG || 'dev';

// ssl
const key = `${__dirname}/../cert/key.pem`;
const cert = `${__dirname}/../cert/cert.pem`;

// create log file
const logStream = fs.createWriteStream(defaultConfigLog, {
  flags: 'a'
});
const log =
  userLog === defaultTypeLog
    ? morgan('combined', { stream: logStream })
    : morgan(userLog);

app.use(helmet.hidePoweredBy());
app.use(compression());

app.use('/static', express.static(path.resolve(__dirname, 'public')));

// log request
app.use(log);

// cors
if (appConfig.CORS) {
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
