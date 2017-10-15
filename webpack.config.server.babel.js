import path from 'path';
import fs from 'fs';
import webpack from 'webpack';

module.exports = (env) => { 
  const webpackConfig = {
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    entry: path.resolve(__dirname, './server/server.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'server.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [
        'node_modules', __dirname
      ]
    },
  };
  return webpackConfig;
}