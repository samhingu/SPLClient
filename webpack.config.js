const path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
//const bowerWebpackPlugin = require("bower-webpack-plugin")
const isProduction = (process.env.NODE_ENV === 'production');
const PATHS = {
  app : path.join(__dirname, 'src'),
  build : path.join(__dirname, 'dist')
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
  //plugins.push( new copyWebpackPlugin([{ from: 'images/icons', to : "icons" }]));
  // plugins.push( new bowerWebpackPlugin({
  //   modulesDirectories: ["bower_components"],
  //   manifestFiles:      "bower.json",
  //   includes:           /.*/,
  //   excludes:           ['*.less'],
  //   searchResolveModulesDirectories: true
  // }));
  //
  // plugins.push( new webpack.ResolverPlugin(
  //     new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
  //   ));
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

  loaders.push({ test : /\.ts[x]?$/, loader : 'ts-loader' });
  loaders.push({ test: /\.css$/, loader: "style!css" });
  loaders.push({ test: /\.less$/, loader: "style!css!less" });


  loaders.push({ test: /\.(ttf|woff(2)|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=[name].[ext]" });
//  loaders.push({ test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"});
  loaders.push({ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' });
  //loaders.push({ test: /\.(ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" });
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
    extensions : ["", ".js", ".tsx", ".ts"],
    modulesDirectories: ["node_modules","bower_components"]
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
