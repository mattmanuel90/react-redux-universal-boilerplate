import path from 'path';

module.exports = () => {
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
    }
  };
  return webpackConfig;
};
