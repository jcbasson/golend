const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");
const paths = require("./build-utils/settings/paths");
const LodashPlugin = require("lodash-webpack-plugin");

module.exports = ({ mode, presets }) => {
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
          }
        ]
      },
      resolve: {
        extensions: ["*", ".js", ".jsx"]
      },
      output: {
        filename: "bundle.js",
        chunkFilename: "[name].lazy-chunk.js"
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: `${paths.appEntry}/index.html`,
          favicon: `${paths.appEntry}/favicon.ico`
        }),

        new webpack.ProgressPlugin(),
        new LodashPlugin()
      ]
    },
    modeConfig(mode),

    presetConfig({ mode, presets })
  );
};
