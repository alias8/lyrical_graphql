import gql from "graphql-tag";
import React from "react";
import { ChildDataProps, ChildMutateProps, graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { fetchSongs } from "../queries/fetchSongs";
import { ISong } from "../types";

interface IPropsItem {
  id: string;
  title?: string;
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

interface IResponse {
  songs: ISong[];
}

type ChildProps = ChildDataProps<{}, IResponse, {}> & ChildMutateProps;

type IProps = ChildProps;

class SongList extends React.Component<IProps> {
  public render() {
    const { songs } = this.props.data;
    if (this.props.data.loading) {
      return <div>loading!</div>;
    } else {
      return (
        <ul className={"collection"}>
          {songs &&
            songs.map(({ id, title }) => {
              return (
                <Item
                  key={id}
                  id={id}
                  title={title}
                  onSongDelete={this.onSongDelete}
                />
              );
            })}
        </ul>
      );
    }
  }

  private onSongDelete = id => {
    this.props
      .mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  };
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

const withSongs = graphql<{}, IResponse, {}, ChildProps>(fetchSongs)(SongList);

export default graphql(mutation)(withSongs);
