import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} from "graphql";

export const CommentType: any = new GraphQLObjectType({
  name: "CommentType",
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString }
  })
});
