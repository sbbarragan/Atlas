import zeromq from 'zeromq';
import enviroments from 'dotenv';

const publisher = zeromq.socket('pub');
enviroments.config();
const env = process && process.env;

const connectionType = env.ZEROTYPE || 'tcp';
const port = env.ZEROPORT || 3001;
const host = env.HOST || '*';
const topic = env.TOPIC || 'rand';

const address = `${connectionType}://${host}:${port}`;

publisher.bind(address, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on ${port}…`);
  }
});

setInterval(() => {
  // if you pass an array, send() uses SENDMORE flag automatically
  publisher.send(['number', Math.floor(Math.random() * 10 + 1)]);
  // if you want, you can set it explicitly
  // publisher.send('B', zeromq.ZMQ_SNDMORE);
  // publisher.send(`Topic: ${topic}`);
}, 1000);
