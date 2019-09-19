import compression from 'compression';
import helmet from 'helmet';
import express from 'express';
import morgan from 'morgan';
import enviroments from 'dotenv';
import atob from 'atob';
import path from 'path';
import cors from 'cors';
import { createServer } from 'http';
import { server } from 'websocket';
import { socket } from 'zeromq';
import publicRoutes from './routes/public';
import apiRoutes from './routes/api';
import { messageTerminal } from './utils';

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
app.use(express.urlencoded());

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
const appServer = createServer(app);

// create the server
const wsServer = new server({
  httpServer: appServer
});

// connect to zeromq
const zeromqSock = socket('sub');
const address = `${zeromqType}://${zeromqHost}:${zeromqPort}`;
try {
  zeromqSock.connect(address);
  const clients = [];
  wsServer.on('request', request => {
    // aca deberia ir la el auth

    const clientConnection = request.accept(null, request.origin);
    clients.push(clientConnection);
    zeromqSock.subscribe('');
    zeromqSock.on('message', (topic, mssg) => {
      const mssgs = [];
      clients.map(client => {
        client.send('->', topic);
        client.send(atob(mssg));
        Array.prototype.slice.call(mssg).forEach(arg => {
          mssgs.push(arg.toString());
        });
        console.log('->', topic, mssgs);
      });
    });
  });
} catch (error) {
  const config = {
    color: 'red',
    type: error,
    message: '%s'
  };
  messageTerminal(config);
}

appServer.listen(port, () => {
  const config = {
    color: 'green',
    type: port,
    message: 'Server listen in port %s'
  };
  messageTerminal(config);
});
