const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const paths = require("./settings/paths");

module.exports = (env, app) => ({
  mode: "production",
  entry: {
    app: `${paths.appEntry}/${app}/index.js`
  },
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
});
