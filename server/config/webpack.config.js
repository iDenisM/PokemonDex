const path = require('path');
const nodeExternals = require('webpack-node-externals');

const common = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      },
    ],
  },
};

const serverConfig = {
  ...common,

  mode: 'development',

  name: 'server',
  target: 'node',
  externals: [nodeExternals()],

  entry: {
    server: ['@babel/polyfill', path.resolve(__dirname,'..', 'src', 'server.js')],
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'server.js',
  },

  devtool: 'cheap-module-source-map'
};

module.exports = [serverConfig];