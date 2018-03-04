const path = require("path");

module.exports = [{
  name: "ElectronSample",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
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
