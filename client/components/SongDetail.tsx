import React from "react";
import { graphql } from "react-apollo";
import { Link, RouteComponentProps } from "react-router-dom";
import { fetchSong } from "../queries/fetchSong";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

interface IProps extends RouteComponentProps<{ id: string }> {
  something?: string;
  data: any;
}

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

export const Test = () => {
  return <div>test123</div>;
};

/*
 * use this method when you need to query something using the url
 * i.e. before the component renders
 * */
export default graphql<IProps, { song: string }>(fetchSong, {
  options: props => {
    return {
      variables: {
        id: props.match.params.id
      }
    };
  }
})(SongDetail);
