import React, { SyntheticEvent } from "react";
import { RouteComponentProps } from "react-router";
import {
  AddSongComponent,
  AddSongProps,
  DeleteSongComponent,
  GetSongComponent,
  GetSongsComponent,
  GetSongsProps,
  withAddSong,
  withGetSongs
} from "../../server/generated/types";

interface IState {
  title: string;
}

type IProps = AddSongProps &
  GetSongsProps &
  RouteComponentProps<{ id: string }>;

export class SongCreate extends React.Component<IProps, IState> {
  public state = {
    title: ""
  };

  public render() {
    const { title } = this.state;
    const { match } = this.props;
    return (
      <GetSongsComponent skip={false}>
        {({ loading, refetch }) => {
          if (loading) {
            return <div>loading!</div>;
          }
          return (
            <AddSongComponent>
              {mutate => (
                <>
                  <h3>Create new song</h3>
                  <form
                    onSubmit={event => this.onSubmit(event, mutate, refetch)}
                  >
                    <label>Song Title:</label>
                    <input
                      onChange={event =>
                        this.setState({ title: event.target.value })
                      }
                      value={title}
                    />
                  </form>
                </>
              )}
            </AddSongComponent>
          );
        }}
      </GetSongsComponent>
    );
  }

  private onSubmit = (
    event: SyntheticEvent<HTMLFormElement>,
    mutate,
    refetch
  ) => {
    event.preventDefault();
    const { title } = this.state;
    const { history } = this.props;
    mutate!({
      variables: {
        title
      }
    })
      .then(() => {
        /*
         * we need to tell apollo that we've added something to the songs list
         * and to refetch the whole list.
         * */
        return refetch();
      })
      .then(() => {
        history.push("/");
      });
  };
}
