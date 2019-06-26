import React from "react";

interface IState {
  title: string;
}

class SongCreate extends React.Component<{}, IState> {
  public state = {
    title: ""
  };
  public render() {
    return (
      <div>
        <h3>Create Song</h3>
        <form>
          <label>Song Title:</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

export default SongCreate;
