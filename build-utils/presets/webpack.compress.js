const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = () => ({
  plugins: [
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|jsx|css|html|svg)$/,
      exclude: /node_modules/
    }),
    new BrotliPlugin({
      filename: "[path].br[query]",
      test: /\.(js|jsx|css|html|svg)$/,
      exclude: /node_modules/
    })
  ]
});
