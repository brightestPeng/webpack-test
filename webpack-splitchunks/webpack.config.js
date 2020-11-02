const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  mode: "development",
  entry: {
    pageA: "./src/pageA.js",
    pageB: "./src/pageB.js",
    pageC: "./src/pageC.js",
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    chunkIds: "named",
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks:2,
          maxInitialRequests:1, // 默认为3
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
        },
      },
    },
  },
};
