const paths = require("./settings/paths");

const webpack = require("webpack");

const port = process.env.PORT || 3000;

module.exports = (env, app) => {
  return {
    mode: "development",
    entry: {
      app: `${paths.appEntry}/${app}/index.js`
    },
    output: {
      filename: "[name].[hash].js"
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                localsConvention: "camelCase",
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      host: "localhost",
      port: port,
      historyApiFallback: true,
      hot: true,
      open: true
    }
  };
};
