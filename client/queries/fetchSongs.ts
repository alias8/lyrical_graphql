import gql from "graphql-tag";

export const songQuery = gql`
  {
    songs {
      id
      title
    }
  }
`;
