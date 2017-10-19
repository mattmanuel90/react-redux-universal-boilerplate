import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const paths = {
  SRC: path.resolve(__dirname, 'client'),
  JS: path.resolve(__dirname, 'client/js'),
  DIST: path.resolve(__dirname, 'build/public')
};


module.exports = () => {
  const webpackConfig = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
      path: paths.DIST,
      filename: 'app.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: ['file-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(paths.SRC, 'index.html')
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', 'json'],
    },
  };
  return webpackConfig;
};
