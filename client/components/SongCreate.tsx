import gql from "graphql-tag";
import React, { SyntheticEvent } from "react";
import { graphql } from "react-apollo";
import { withRouter } from "react-router-dom";
import { fetchSongs } from "../queries/fetchSongs";
/* tslint:disable:jsx-no-lambda */
interface IState {
  title: string;
}

class SongCreate extends React.Component<any, IState> {
  public state = {
    title: ""
  };

  public render() {
    return (
      <div>
        <h3>Create new song</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song Title:</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }

  private onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          title: this.state.title
        },
        refetchQueries: [{ query: fetchSongs }]
      })
      .then(() => {
        this.props.history.push("/");
      });
  };
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(withRouter(SongCreate));
