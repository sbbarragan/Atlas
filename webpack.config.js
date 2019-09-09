const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const enviroments = require('dotenv');

enviroments.config();
const env = process && process.env;

// settings
const mode = env.MODE || 'development';
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
  }
};

const clientConfig = {
  mode,
  target: 'web',
  entry: {
    'app.js': path.resolve(__dirname, 'src/public/app.js')
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
  }
};

module.exports = [serverConfig, clientConfig];
