import gql from "graphql-tag";

export const onCommentAdded = gql`
  subscription onCommentAdded {
    commentAdded {
      id
      content
    }
  }
`;
