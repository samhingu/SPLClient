module.exports = {
  entry: './src/index.tsx',
  output : {
    filename : './dist/bundle.js'
  },
  devtool: 'source-map',
  resolve : {
    extensions : ["", ".js", ".tsx"]
  },
  module : {
    loaders : [
      {test : /\.tsx?$/, loader : 'ts-loader'}
    ],
    preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
          ]
  },
  externals : {
    "react" : "React",
    "react-dom": "ReactDOM"
  }

}
