import bodyParser from "body-parser";
import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import { loadSampleData } from "./data/loadSampleData";
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
