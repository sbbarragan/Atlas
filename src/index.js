import compression from 'compression';
import helmet from 'helmet';
import express from 'express';
import morgan from 'morgan';
import enviroments from 'dotenv';
import atob from 'atob';
import path from 'path';
import cors from 'cors';

import { createServer } from 'https';
import { server } from 'websocket';
import { socket } from 'zeromq';
import xml2js from 'xml2js';
import bodyParser from 'body-parser';
import fs from 'fs';

import publicRoutes from './routes/public';
import apiRoutes from './routes/api';
import { messageTerminal, validateAuth } from './utils';
import { unauthorized } from './config/http-codes';

const app = express();

// enviroments
enviroments.config();
const env = process && process.env;

// settings
const port = env.PORT || 3000;
const log = env.LOG || 'dev';
const zeromqType = env.ZEROTYPE || 'tcp';
const zeromqPort = env.ZEROPORT || 2101;
const zeromqHost = env.ZEROHOST || '127.0.0.1';

app.use(helmet.hidePoweredBy());
app.use(compression());

app.use('/static', express.static(path.resolve(__dirname, 'public')));

// log request
app.use(morgan(log));

// cors
if (env.MODE && env.MODE === 'development') {
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
const appServer = createServer(
  {
    key: fs.readFileSync(`${__dirname}/../cert/key.pem`, 'utf8'),
    cert: fs.readFileSync(`${__dirname}/../cert/cert.pem`, 'utf8')
  },
  app
);

// create the server
const wsServer = new server({
  httpServer: appServer
});

// connect to zeromq
const zeromqSock = socket('sub');
const address = `${zeromqType}://${zeromqHost}:${zeromqPort}`;
try {
  zeromqSock.connect(address);
  let clients = [];

  wsServer.on('request', request => {
    if (
      request &&
      request.resourceURL &&
      request.resourceURL.query &&
      request.resourceURL.query.token &&
      validateAuth({
        headers: { authorization: request.resourceURL.query.token }
      })
    ) {
      const clientConnection = request.accept(null, request.origin);
      clients.push(clientConnection);
      zeromqSock.subscribe('');
      zeromqSock.on('message', (...args) => {
        const mssgs = [];
        // broadcast
        clients.map(client => {
          Array.prototype.slice.call(args).forEach(arg => {
            mssgs.push(arg.toString());
          });
          if (mssgs[0] && mssgs[1]) {
            xml2js.parseString(
              atob(mssgs[1]),
              {
                explicitArray: false,
                trim: true,
                normalize: true,
                includeWhiteChars: true,
                strict: false
              },
              (error, result) => {
                if (error) {
                  const configErrorParser = {
                    color: 'red',
                    type: error,
                    message: 'Error parser: %s'
                  };
                  messageTerminal(configErrorParser);
                  return;
                }
                client.send(
                  JSON.stringify({ command: mssgs[0], data: result })
                );
              }
            );
          }
        });
      });
    } else {
      const { id, message } = unauthorized;
      request.reject(id, message);
    }
  });

  wsServer.on('close', request => {
    // clear connection to broadcast
    clients = clients.filter(client => client !== request);
  });
} catch (error) {
  const configErrorZeroMQ = {
    color: 'red',
    type: error,
    message: '%s'
  };
  messageTerminal(configErrorZeroMQ);
}

appServer.listen(port, () => {
  const config = {
    color: 'green',
    type: port,
    message: 'Server listen in port %s'
  };
  messageTerminal(config);
});
