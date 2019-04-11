var path = require("path");
var ManifestPlugin = require("webpack-manifest-plugin");
module.exports = {
  mode: "development",
  entry: {
    main: "./app/index.js",
    vendor: ["moment", "lodash"]
  },
  output: {
    filename: "[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new ManifestPlugin({
      fileName: "manifest.json",
      basePath: "./dist/"
    })
  ],
  optimization: {
    runtimeChunk: {
      name: "runtime"
    },
    splitChunks: {
      name: "vendor",
      chunks: "initial"
    }
  }
};
