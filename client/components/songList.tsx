import gql from "graphql-tag";
import React from "react";
import { ChildDataProps, graphql } from "react-apollo";

const SONG_QUERY = gql`
  {
    songs {
      title
    }
  }
`;

// tslint:disable-next-line:interface-name
interface Song {
  title: string;
}

// tslint:disable-next-line:interface-name
interface Response {
  songs: Song[];
}

// tslint:disable-next-line:interface-name
interface Variables {
  episode: string;
}

type ChildProps = ChildDataProps<{}, Response, Variables>;

// Note that the first parameter here is an empty Object, which means we're
// not checking incoming props for type safety in this example. The next
// example (in the "Options" section) shows how the type safety of incoming
// props can be ensured.
const withCharacter = graphql<{}, Response, Variables, ChildProps>(SONG_QUERY, {
  options: () => ({
    variables: { episode: "JEDI" }
  })
});

export default withCharacter(({ data: { loading, songs, error } }) => {
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <h1>ERROR</h1>;
  }
  return (
    <div>
      {songs &&
        songs.map(song => {
          return song.title;
        })}
    </div>
  );
});
