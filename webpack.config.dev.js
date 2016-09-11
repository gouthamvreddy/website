import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ["style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]"]},
    ]
  }
};
