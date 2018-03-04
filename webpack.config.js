const path = require("path");

module.exports = [{
  name: "ElectronSample",
  entry: "./src/entry.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }]
      },
      {
        test: /\.css$/,
        use: [{
            loader: "css-loader"
          },
          {
            loader: "style-loader"
          }
        ]
      }
    ]
  }
}];
