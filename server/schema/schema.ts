import { GraphQLSchema } from "graphql";
import { mutations } from "./mutations";
import { RootQuery } from "./root_query_type";

export default new GraphQLSchema({
  query: RootQuery,
  mutation: mutations
});
