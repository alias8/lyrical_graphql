import { CleanWebpackPlugin } from "clean-webpack-plugin";
import del from "del";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, { Stats } from "webpack";
import nodeExternals from "webpack-node-externals";

if (
  !["development", "test", "production"].some(
    env => process.env.NODE_ENV === env
  )
) {
  throw new Error(
    "Environment must be set in the npm script eg. ENV=development, ENV=test, ENV=production, got:"
  );
}

const isDev = process.env.NODE_ENV === "development";

export const clientConfig: webpack.Configuration = {
  entry: "./client/index.tsx",
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "dist", "public"),
    publicPath: "/"
  },
  mode: isDev ? "development" : "production",
  target: "web",
  devtool: "inline-source-map",
  optimization: {
    // We no not want to minimize our code.
    minimize: false
  },
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
    }),
    new CleanWebpackPlugin()
  ]
};

export const serverConfig: webpack.Configuration = {
  entry: "./index.ts",
  output: {
    filename: "server.bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  mode: isDev ? "development" : "production",
  target: "node",
  devtool: "inline-source-map",
  optimization: {
    // We no not want to minimize our code.
    minimize: false
  },
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false, // if you don't put this is, __dirname
    __filename: false // and __filename return blank or /
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};
if (process.env.NODE_ENV === "production") {
  del.sync(path.join("dist", "**", "*"));
}

webpack([serverConfig, clientConfig], (err: Error, stats: Stats) => {
  if (err) {
    console.error(err.stack || err);
    if ((err as any).details) {
      console.error((err as any).details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
});
