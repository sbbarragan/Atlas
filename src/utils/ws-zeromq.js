const enviroments = require('dotenv');
const atob = require('atob');

const { server: Server } = require('websocket');
const { socket } = require('zeromq');
const xml2js = require('xml2js');

const { messageTerminal } = require('./general-functions');
const { validateAuth } = require('./jwt-functions');
const { unauthorized } = require('../config/http-codes');

// enviroments
enviroments.config();
const env = process && process.env;

const zeromqType = env.ZEROTYPE || 'tcp';
const zeromqPort = env.ZEROPORT || 2101;
const zeromqHost = env.ZEROHOST || '127.0.0.1';

const addWsServer = appServer => {
  if (
    appServer &&
    appServer.constructor &&
    appServer.constructor.name &&
    appServer.constructor.name === 'Server'
  ) {
    // create the server
    const wsServer = new Server({
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
  }
};

module.exports = {
  addWsServer
};
