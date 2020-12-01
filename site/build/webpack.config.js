const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  mode: 'development',
  entry: {
    app: resolve('../src/index.js'),
  },
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      react: resolve('../../node_modules/react'),
      'react-dom': resolve('../../node_modules/react-dom'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve('./../dist/index.html'),
      template: 'index.html',
      inject: true,
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
  devServer: {
    open: true,
    quiet: true,
  },
};
