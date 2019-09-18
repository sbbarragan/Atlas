const 
const zmq = require('zeromq');

const sock = zmq.socket('sub');
sock.connect('tcp://127.0.0.1:2101');
sock.subscribe('');
sock.on('message', (topic, message) => {
  res.locals.httpCode = { message, topic };
  console.log(
    'received a message related to:',
    topic,
    'containing message:',
    message
  );
});