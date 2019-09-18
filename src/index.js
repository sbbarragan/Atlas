import compression from 'compression';
import helmet from 'helmet';
import express from 'express';
import morgan from 'morgan';
import enviroments from 'dotenv';
import path from 'path';
import cors from 'cors';
import { createServer } from 'http';
import { server } from 'websocket';
import publicRoutes from './routes/public';
import apiRoutes from './routes/api';
import { messageTerminal } from './utils';

const app = express();

// enviroments
enviroments.config();
const env = process && process.env;

// settings
const port = env.PORT || 3000;
const wsPort = env.WSPORT || 3001;
const log = env.LOG || 'dev';

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
// WebSocket petitions
wsServer.on('request', request => {
  const connection = request.accept(null, request.origin);

  connection.on('message', message => {
    console.log('->', message);
    if (message.type && message.type === 'utf8' && 'utf8Data' in message) {
      const { utf8Data: data } = message;
      console.log('received: %s', data);
      connection.send(`Hello, you sent -> ${data}`);
    }
  });
});

appServer.listen(port, () => {
  const config = {
    color: 'green',
    type: port,
    message: 'Server listen in port %s'
  };
  messageTerminal(config);
});

/*
app.listen(port, () => {
  const config = {
    color: 'green',
    type: port,
    message: 'Server listen in port %s'
  };
  messageTerminal(config);
});
*/
