import gql from "graphql-tag";

export default gql`
  query getSongs {
    songs {
      id
      title
    }
  }
`;
