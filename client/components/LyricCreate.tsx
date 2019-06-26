import React from "react";

interface IState {
  content: string;
}

class LyricCreate extends React.Component<{}, IState> {
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
    // (this.props as any).mutate({
    //   variables: {
    //     content: this.state.content,
    //     songId: this.props.songId
    //   }
    // });
  };
}

export default LyricCreate;
