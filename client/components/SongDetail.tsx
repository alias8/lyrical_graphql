import gql from "graphql-tag";
import React from "react";
import { ChildDataProps, graphql, Query } from "react-apollo";
import { Link, RouteComponentProps } from "react-router-dom";
import { ISong } from "../types";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const FETCH_SONG_QUERY = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;

interface Response {
  song: ISong;
}

interface Variables {
  id: string;
}

type ChildProps = ChildDataProps<{}, Response, Variables>;

interface IOwnProps extends RouteComponentProps<{ id: string }> {
  something?: string;
}

type IProps = IOwnProps & ChildProps;

class SongDetail extends React.Component<IProps> {
  public render() {
    const { song } = this.props.data;
    if (!song) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <Link to={"/"}>Back</Link>
        <h3>{song.title}</h3>
        <LyricList />
        <LyricCreate songId={this.props.match.params.id} />
      </div>
    );
  }
}

const withSong = graphql<IOwnProps, Response, Variables, ChildProps>(
  FETCH_SONG_QUERY,
  {
    options: props => {
      return {
        variables: {
          id: props.match.params.id
        }
      };
    }
  }
);

export default withSong(SongDetail);
