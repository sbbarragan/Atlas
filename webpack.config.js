const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const enviroments = require('dotenv');
const { defaultMode } = require('./src/config/defaults');

enviroments.config();
const env = process && process.env;

// settings
const mode = env.MODE || defaultMode;
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
    'index.js': path.resolve(__dirname, 'src/index.js'),
    'publisherZMQ.js': path.resolve(__dirname, 'src/publisherZMQ.js')
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

module.exports = [serverConfig, clientConfig];
