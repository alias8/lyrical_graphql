import webpack from "webpack";
import webpackDevMiddlewareWrapper from "webpack-dev-middleware";
import { clientConfig } from "../webpack.config";

export const webpackDevMiddleware = () => {
  return webpackDevMiddlewareWrapper(webpack(clientConfig), {
    publicPath: clientConfig.output!.publicPath as string
  });
};
