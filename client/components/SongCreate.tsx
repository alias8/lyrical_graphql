import React, { SyntheticEvent } from "react";
import { RouteComponentProps } from "react-router";
import {
  AddSongProps,
  GetSongsProps,
  withAddSong,
  withGetSongs
} from "../../server/generated/types";
import ErrorMessage, { MySnackbarContentWrapper } from "./Notifications";

interface IState {
  title: string;
  error: boolean;
}

type IProps = AddSongProps & GetSongsProps & RouteComponentProps;

class SongCreate extends React.Component<IProps, IState> {
  public state = {
    title: "",
    error: false
  };

  public render() {
    const { title, error } = this.state;
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
        {error && <ErrorMessage />}
      </div>
    );
  }

  private onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title } = this.state;
    this.props.mutate!({
      variables: {
        title
      }
    })
      .then(() => {
        /*
         * we need to tell apollo that we've added something to the songs list
         * and to refetch the whole list.
         * */
        return this.props.data!.refetch();
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  };
}

export default withGetSongs<IProps>()(withAddSong<IProps>()(SongCreate));
