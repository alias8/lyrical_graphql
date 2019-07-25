import gql from "graphql-tag";

export const getSongs = gql`
  query getSongs {
    songs {
      id
      title
    }
  }
`;

export const getSong = gql`
  query getSong($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
