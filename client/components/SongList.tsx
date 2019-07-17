import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import {
  DeleteSongProps,
  GetSongsProps,
  withDeleteSong,
  withGetSongs
} from "../../server/generated/types";

interface IPropsItem {
  id: string;
  title: string;
  onSongDelete: (id: string) => void;
}

const Item = ({ id, title, onSongDelete }: IPropsItem) => {
  const onClick = () => {
    onSongDelete(id);
  };

  return (
    <li className={"collection-item"}>
      <Link to={`/songs/${id}`}>{title}</Link>
      <i className={"material-icons"} onClick={onClick}>
        delete
      </i>
    </li>
  );
};

type IProps = RouteComponentProps & GetSongsProps & DeleteSongProps;

class SongList extends React.Component<IProps> {
  public render() {
    const { data } = this.props;
    if (data!.loading) {
      return <div>loading!</div>;
    } else {
      return (
        <ul className={"collection"}>
          {this.props.data!.songs!.map(song => {
            return (
              <Item
                key={song!.id!}
                id={song!.id!}
                title={song!.title!}
                onSongDelete={this.onSongDelete}
              />
            );
          })}
        </ul>
      );
    }
  }

  private onSongDelete = id => {
    this.props.mutate!({ variables: { id } }).then(() => {
      /*
       * We can use refetch() here because we want to call the getSongs
       * query again, and this component knows what that is.
       * */
      return this.props.data!.refetch();
    });
  };
}

export default withDeleteSong<IProps>()(withGetSongs<IProps>()(SongList));
