import React, { SyntheticEvent } from "react";
import { RouteComponentProps } from "react-router";
import { AddSongProps, withAddSong } from "../../server/generated/types";
import { getSongs } from "../gqlOperations/queries";

interface IState {
  title: string;
}

type IProps = AddSongProps & RouteComponentProps;

class SongCreate extends React.Component<IProps, IState> {
  public state = {
    title: ""
  };

  public render() {
    const { title } = this.state;
    return (
      <div>
        <h3>Create new song</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song Title:</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={title}
          />
        </form>
      </div>
    );
  }

  private onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title } = this.state;
    this.props.mutate!({
      variables: {
        title
      },
      /*
       * We can't use refetch() here because we want to call the getSongs
       * query again, and this component does not know what that is.
       * */
      refetchQueries: [{ query: getSongs }]
    }).then(() => {
      this.props.history.push("/");
    });
  };
}

export default withAddSong<IProps>()(SongCreate);
