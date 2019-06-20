import gql from "graphql-tag";
import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { fetchSongs } from "../queries/fetchSongs";

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

class SongList extends React.Component<any> {
  public render() {
    if (this.props.data.loading) {
      return <div>loading!</div>;
    } else {
      return (
        <ul className={"collection"}>
          {this.props.data.songs.map(({ id, title }) => {
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

export default graphql(mutation)(graphql(fetchSongs)(SongList));
