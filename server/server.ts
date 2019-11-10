import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";
import express from "express";
import expressGraphQL from "express-graphql";
import { PubSub } from "graphql-subscriptions";
import mongoose from "mongoose";
import { loadSampleData } from "./data/loadSampleData";
import { CommentModel } from "./models/comment";
import schema from "./schema/schema";

export const app = express();
export const pubsub = new PubSub();

// Replace with your mongoLab URI
let MONGO_URI;
if (process.env.NODE_ENV !== "production") {
  MONGO_URI = "mongodb://james:james123@ds141188.mlab.com:41188/lyricaldb-test"; // dev
} else {
  MONGO_URI = "mongodb://james:james123@ds137827.mlab.com:37827/lyticaldb"; // prod
}

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

console.log(`----------------------- env is: ${process.env.NODE_ENV}`);
if (process.env.NODE_ENV !== "production") {
  import("./webpackDev").then(webpackDev => {
    app.use(webpackDev.webpackDevMiddleware());
  });
} else {
  app.use(express.static(__dirname + "/public"));
}

loadSampleData();
const SECOND = 1000;
const MINUTE = 60 * SECOND;
setInterval(() => {
  // Reload sample data every 10 mins
  loadSampleData();
}, 10 * MINUTE);

setInterval(() => {
  // Reload sample data every 10 mins
  const content = `comment ${new Date()}`;
  new CommentModel({
    // todo: associate with song later
    content
  }).save();
  pubsub.publish("commentAdded", content);
}, 20 * SECOND);
