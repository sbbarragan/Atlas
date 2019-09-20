// INCOMPLETE

const { server } = require('websocket');
const { socket } = require('zeromq');
const xml2js = require('xml2js');
const atob = require('atob');
const enviroments = require('dotenv');
const { messageTerminal } = require('../utils');

// enviroments
enviroments.config();
const env = process && process.env;

// settings
const zeromqType = env.ZEROTYPE || 'tcp';
const zeromqPort = env.ZEROPORT || 2101;
const zeromqHost = env.ZEROHOST || '127.0.0.1';

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
              client.send(JSON.stringify({ command: mssgs[0], data: result }));
            }
          );
        }
      });
    });
  });
} catch (error) {
  const configErrorZeroMQ = {
    color: 'red',
    type: error,
    message: '%s'
  };
  messageTerminal(configErrorZeroMQ);
}
