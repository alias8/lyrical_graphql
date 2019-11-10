import React from "react";
import {
  AddLyricToSongComponent,
  AddLyricToSongProps,
  withAddLyricToSong
} from "../../server/generated/types";

interface IState {
  content: string;
}

interface IOwnProps {
  songId: string;
}

type IProps = IOwnProps;

export class LyricCreate extends React.Component<IProps, IState> {
  public state = {
    content: ""
  };

  public onChange = event => {
    this.setState({ content: event.target.value });
  };

  public render() {
    return (
      <AddLyricToSongComponent
        variables={{
          content: this.state.content,
          songId: this.props.songId
        }}
      >
        {mutate => (
          <form
            onSubmit={event => {
              event.preventDefault();
              mutate!({
                variables: {
                  content: this.state.content,
                  songId: this.props.songId
                }
              }).then(() => this.setState({ content: "" }));
            }}
          >
            <label>Add a lyric</label>
            <input value={this.state.content} onChange={this.onChange} />
          </form>
        )}
      </AddLyricToSongComponent>
    );
  }
}
