const path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const isProduction = (process.env.NODE_ENV === 'production');
const PATHS = {
  app : path.join(__dirname, '../src'),
  build : path.join(__dirname, '../dist')
}

function getPlugins(){
  var plugins = [];

  plugins.push(new webpack.optimize.OccurenceOrderPlugin());
  plugins.push(new webpack.NoErrorsPlugin());
  plugins.push(new cleanPlugin(PATHS.build, { verbose: true, dry: false }));
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: !isProduction
    }
  }));
  plugins.push(new htmlPlugin({
    title: 'SPL Client',
    template: path.join(PATHS.app,  'index.html'),
    inject: 'body'
  }));
  plugins.push(new extractTextPlugin('[name].[contenthash].css',{
    allChunks: true
  }));
  plugins.push( new copyWebpackPlugin([{ from: 'images/icons', to : "icons" }]));
  if(isProduction){
    // plugins.push(new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     drop_console: true,
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   }
    // }));
  }

  return plugins;
}

function getLoaders(){
  var loaders = [];

  loaders.push({test : /\.ts[x]?$/, loader : 'ts-loader'});
  // loaders.push({
  //    test: /\.(jpg|jpeg|gif|png|ico)$/,
  //    exclude: /node_modules/,
  //    loader:'file-loader?name=img/[path][name].[ext]&context=./app/images'
  // });
  return loaders;
}

module.exports = {
  entry: path.join(PATHS.app, 'index.tsx'),
  output : {
    path: PATHS.build,
    filename : '[name].[hash].js'
  },
  devtool: 'source-map',
  resolve : {
    extensions : ["", ".js", ".tsx", ".ts"]
  },
  module : {
    loaders : getLoaders(),
    preLoaders: [{ test: /\.js$/, loader: "source-map-loader" }]
  },
  plugins: getPlugins(),
  externals : {
    "react" : "React",
    "react-dom": "ReactDOM"
  }

}
