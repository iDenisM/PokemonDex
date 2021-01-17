require('ignore-styles')
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const common = {
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, '..', 'client', 'src')
        ],
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties"
          ]
        },
      },
      { 
        test: /\.(scss|css)$/, 
        loader: "ignore-loader" 
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "ignore-loader" 
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
    server: ['@babel/polyfill', path.resolve(__dirname, 'src', 'server.js')],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },

  devtool: 'cheap-module-source-map'
};

module.exports = [serverConfig];