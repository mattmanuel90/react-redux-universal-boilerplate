import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const paths = {
  SRC: path.resolve(__dirname, 'client'),
  JS: path.resolve(__dirname, 'client/js'),
  DIST: path.resolve(__dirname, 'build/public')
};

module.exports = [
  {
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
      }),
      new BundleAnalyzerPlugin({ openAnalyzer: false })
    ],
    resolve: {
      extensions: ['.js', '.jsx', 'json'],
    },
  }
];
