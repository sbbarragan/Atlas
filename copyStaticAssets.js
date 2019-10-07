const fs = require('fs-extra');
const { messageTerminal } = require('./src/utils');

const pathNodeModules = 'node_modules/';

const pathBootstrap = `${pathNodeModules}bootstrap/dist/css/`;
const pathInternal = 'src/public/resources/';
const pathExternal = 'dist/public/';

const config = {
  color: 'red',
  type: 'ERROR',
  error: '',
  message: 'Static assets copy: %s'
};

const files = [
  {
    internal: `${pathInternal}favicon.ico`,
    external: `${pathExternal}favicon.ico`
  },
  {
    internal: `${pathBootstrap}bootstrap.min.css`,
    external: `${pathExternal}bootstrap.min.css`
  }
];

try {
  files.map(({ internal, external }) => {
    fs.copySync(internal, external);
  });

  const internalConfig = { color: 'green', type: 'OK', error: '' };
  messageTerminal({ ...config, ...internalConfig });
} catch (err) {
  const internalConfig = { error: err.message };
  messageTerminal({ ...config, ...internalConfig });
}
