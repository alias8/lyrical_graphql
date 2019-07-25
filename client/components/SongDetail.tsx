import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { GetSongProps, withGetSong } from "../../server/generated/types";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

type IProps = RouteComponentProps<{ id: string }> & GetSongProps;

class SongDetail extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <Link to={"/"}>Back</Link>
        {this.props.data && this.props.data.song ? (
          <div>
            <h3>{this.props.data.song.title}</h3>
            {this.props.data.song.lyrics && (
              <LyricList lyrics={this.props.data.song.lyrics} />
            )}
            <LyricCreate songId={this.props.match.params.id} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default withGetSong<IProps>({
  options: props => ({
    variables: {
      id: props.match.params.id
    }
  })
})(SongDetail);
