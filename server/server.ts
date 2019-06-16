import bodyParser from "body-parser";
import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import { webpackConfig } from "../webpack.config";
import schema from "./schema/schema";

export const app = express();

// Replace with your mongoLab URI
const MONGO_URI = "mongodb://james:james123@ds137827.mlab.com:37827/lyticaldb";
if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", error => console.log("Error connecting to MongoLab:", error));

app.use(bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.use(webpackMiddleware(webpack(webpackConfig)));
