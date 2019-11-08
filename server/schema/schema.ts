import { GraphQLSchema } from "graphql";
import { mutations } from "./mutations";
import { RootQuery } from "./root_query_type";
import { subscriptions } from "./subscriptions";

export default new GraphQLSchema({
  query: RootQuery,
  mutation: mutations,
  subscription: subscriptions
});
