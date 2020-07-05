const { join } = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
  entry: ['./src/index.js'],
//   entry: {
//   javascript: './src/main.js',
//   html: "./public/index.html",
// },
  output: {
    path: join(__dirname, '/public/js/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  performance: {
    hints: false,
  },
    devServer: {
      contentBase: join(__dirname, '/public'),
    // hot: true,
    historyApiFallback: true,
    // disableHostCheck: true
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-0'],
          plugins: [
            'react-html-attrs',
            'transform-class-properties',
            'transform-decorators-legacy',
            'transform-react-jsx-source',
          ],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      { test: /\.ts$/, use: 'ts-loader' },
 {
                 test:/\.(s*)css$/,
                 use:['style-loader','css-loader', 'sass-loader']
              }
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),

    new ProgressBarPlugin({
      format:
        '  build [:bar] ' +
        chalk.green.bold(':percent') +
        ' (:elapsed seconds)',
    }),
    //  new HtmlWebpackPlugin({
    //   template: join(__dirname, '/public/main.html'),
    // })
    // new ExtractTextPlugin({filename: join(__dirname, 'public/styles.css')}),
     // Re-generate index.html with injected script tag.
    // The injected script tag contains a src value of the
    // filename output defined above.
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: join(__dirname, '/public/index.html'),
    // }),
  ],
  watch: true,
}
