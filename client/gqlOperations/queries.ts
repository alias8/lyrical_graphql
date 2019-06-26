import gql from "graphql-tag";

export const getSongs = gql`
  query getSongs {
    songs {
      id
      title
    }
  }
`;
