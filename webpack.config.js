const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = (env, app) =>
  require(`./build-utils/webpack.${env}`)(env, app);
const presetConfig = require("./build-utils/loadPresets");
const paths = require("./build-utils/settings/paths");
const LodashPlugin = require("lodash-webpack-plugin");

module.exports = ({ mode, presets, app }) => {
  return webpackMerge(
    {
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: ["file-loader", "image-webpack-loader"]
          }
        ]
      },
      resolve: {
        extensions: ["*", ".js", ".jsx"]
      },
      output: {
        filename: "bundle.js",
        chunkFilename: "[name].[chunkhash].js",
        publicPath: "/"
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: `${paths.appEntry}/${app}/index.html`,
          favicon: `${paths.appEntry}/${app}/favicon.ico`
        }),

        new webpack.ProgressPlugin(),
        new LodashPlugin({
          collections: true,
          paths: true
        })
      ]
    },
    modeConfig(mode, app),

    presetConfig({ mode, presets })
  );
};
