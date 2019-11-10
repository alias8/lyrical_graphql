import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import {
  DeleteSongComponent,
  GetSongsComponent
} from "../../server/generated/types";

type IProps = RouteComponentProps<{ id: string }>;

export const SongList = (props: IProps) => {
  const { match } = props;
  return (
    <GetSongsComponent skip={false}>
      {({ data, error, loading, refetch }) => {
        if (error || loading) {
          return "...";
        }
        if (data && data.songs) {
          return (
            <ul className={"collection"}>
              {data.songs.map(song => {
                return (
                  <li key={song!.id!} className={"collection-item"}>
                    <Link to={`/songs/${song!.id}`}>{song!.title}</Link>
                    <DeleteSongComponent variables={{ id: song!.id! }}>
                      {mutate => (
                        <Item mutate={mutate} song={song} refetch={refetch} />
                      )}
                    </DeleteSongComponent>
                  </li>
                );
              })}
            </ul>
          );
        }
      }}
    </GetSongsComponent>
  );
};

const Item = ({ mutate, song, refetch }) => {
  const onClick = () => {
    mutate({ variables: { id: song!.id } }).then(() => refetch());
  };

  return (
    <i className={"material-icons"} onClick={onClick}>
      delete
    </i>
  );
};
