import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { PubSub } from "graphql-subscriptions";
import { CommentType } from "./comment_type";

export const COMMENT_ADDED = "commentAdded";

export const pubsubServer = new PubSub();

export const subscriptions = new GraphQLObjectType({
  name: "Subscription",
  fields: () => ({
    commentAdded: {
      type: CommentType,
      subscribe: (parent, args, info) => {
        console.log("----------------------james");
        return pubsubServer.asyncIterator(COMMENT_ADDED);
      }
    }
  })
});
