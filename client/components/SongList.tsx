import React from "react";
import { graphql } from "react-apollo";
import {
  DeleteSongProps,
  GetSongsComponentProps,
  GetSongsDocument,
  GetSongsProps,
  GetSongsQuery,
  GetSongsQueryVariables,
  withDeleteSong,
  withGetSongs
} from "../../server/generated/types";

interface IOwnProps {
  something: string;
}

type IProps = IOwnProps & GetSongsProps & DeleteSongProps;

class SongList extends React.Component<IProps> {
  public render() {
    const { loading, songs } = this.props.data!;
    if (loading) {
      return <div>loading</div>;
    } else {
      return (
        <ul className={"collection"}>
          {songs!.map(song => {
            return (
              <li key={song!.id!} className={"collection-item"}>
                {song!.title}
                <i onClick={this.onSongDelete} className={"material-icons"}>
                  delete
                </i>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  private onSongDelete = () => {
    const a = 2;
  };
}

export default withDeleteSong<IProps>()(withGetSongs<IProps>()(SongList));
