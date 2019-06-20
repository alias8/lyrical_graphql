import gql from "graphql-tag";
import React from "react";
import { graphql } from "react-apollo";

interface IState {
  content: string;
}

interface IProps {
  songId: string;
}

class LyricCreate extends React.Component<IProps, IState> {
  public state = {
    content: ""
  };

  public render() {
    return (
      <form>
        <label>Add a lyric</label>
        <input
          value={this.state.content}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </form>
    );
  }

  private onChange = event => {
    this.setState({ content: event.target.value });
  };

  private onSubmit = event => {
    event.preventDefault();
    (this.props as any).mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    });

    this.setState({
      content: ""
    });
  };
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      title
      lyrics {
        content
      }
    }
  }
`;

// @ts-ignore
export default graphql(mutation)(LyricCreate);
