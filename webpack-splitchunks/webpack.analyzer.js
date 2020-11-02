const merge = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge(common, {
  plugins: [new BundleAnalyzerPlugin()],
});
