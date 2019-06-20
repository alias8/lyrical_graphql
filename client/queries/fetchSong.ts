import gql from "graphql-tag";

export const fetchSong = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;
