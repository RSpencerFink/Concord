const path = require('path');

var webpack = require('webpack');

var plugins = [];
var devPlugins = [];

var prodPlugins = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === "production" ? prodPlugins : devPlugins
);

module.exports = {
  context: __dirname,
  entry: "./frontend/concord.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "app/assets/javascripts/bundle.js"
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
