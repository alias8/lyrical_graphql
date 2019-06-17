import gql from "graphql-tag";
import React from "react";
import { graphql } from "react-apollo";

class SongList extends React.Component<any> {
  public render() {
    if (this.props.data.loading) {
      return <div>loading!</div>;
    } else {
      return (
        <ul className={"collection"}>
          {this.props.data.songs.map((song: any) => {
            return (
              <li key={song.id} className={"collection-item"}>
                {song.title}
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
