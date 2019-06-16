import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export const webpackConfig: webpack.Configuration = {
  entry: "./client/index.tsx",
  output: {
    path: undefined,
    filename: "bundle.js"
  },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/index.html"
    })
  ]
};
