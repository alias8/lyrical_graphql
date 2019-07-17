import React from "react";
import {
  AddLyricToSongProps,
  withAddLyricToSong
} from "../../server/generated/types";

interface IState {
  content: string;
}

interface IOwnProps {
  songId: string;
}

type IProps = IOwnProps & AddLyricToSongProps;

class LyricCreate extends React.Component<IProps, IState> {
  public state = {
    content: ""
  };

  public render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add a lyric</label>
        <input value={this.state.content} onChange={this.onChange} />
      </form>
    );
  }

  private onChange = event => {
    this.setState({ content: event.target.value });
  };

  private onSubmit = event => {
    event.preventDefault();
    this.props.mutate!({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => this.setState({ content: "" }));
  };
}

export default withAddLyricToSong<IProps>()(LyricCreate);
