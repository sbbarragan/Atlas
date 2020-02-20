const nodeExternals = require('webpack-node-externals');
const path = require('path');
const { getConfig } = require('./src/utils/yml-connect');
const { defaultMode } = require('./src/config/defaults');

const appConfig = getConfig();

// settings
const mode = appConfig.MODE || defaultMode;
const devtool = mode === defaultMode ? 'inline-source-map' : '';
const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['react', 'es2015'],
      plugins: ['transform-class-properties', 'transform-object-rest-spread']
    }
  }
};

const serverConfig = {
  mode,
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: {
    'index.js': path.resolve(__dirname, 'src/index.js')
  },
  module: {
    rules: [js]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  },
  devtool
};

const clientConfig = {
  mode,
  target: 'web',
  entry: {
    'app.js': path.resolve(__dirname, 'src/public/front-app.js')
  },
  module: {
    rules: [js]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: '[name]'
  },
  devtool
};

module.exports = env => {
  let build = [];
  if (env) {
    switch (env) {
      case 'front':
        build.push(clientConfig);
        break;
      case 'node':
        build.push(serverConfig);
        break;
    }
  } else {
    build = [serverConfig, clientConfig];
  }
  return build;
};
