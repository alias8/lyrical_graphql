import React from "react";
import { graphql } from "react-apollo";
import {
  GetSongsComponentProps,
  GetSongsDocument,
  GetSongsProps,
  GetSongsQuery,
  GetSongsQueryVariables,
  withGetSongs
} from "../../server/generated/types";

interface IOwnProps {
  something: string;
}

type IProps = GetSongsProps<IOwnProps>;

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
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

export default withGetSongs<IOwnProps>()(SongList);
