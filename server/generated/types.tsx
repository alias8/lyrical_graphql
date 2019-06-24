import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export type Maybe<T> = T | null;
export type MaybePromise<T> = Promise<T> | T;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LyricType = {
  __typename?: "LyricType";
  id?: Maybe<Scalars["ID"]>;
  likes?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
  song?: Maybe<SongType>;
};

export type Mutation = {
  __typename?: "Mutation";
  addSong?: Maybe<SongType>;
  addLyricToSong?: Maybe<SongType>;
  likeLyric?: Maybe<LyricType>;
  deleteSong?: Maybe<SongType>;
};

export type MutationAddSongArgs = {
  title?: Maybe<Scalars["String"]>;
};

export type MutationAddLyricToSongArgs = {
  content?: Maybe<Scalars["String"]>;
  songId?: Maybe<Scalars["ID"]>;
};

export type MutationLikeLyricArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type MutationDeleteSongArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type RootQueryType = {
  __typename?: "RootQueryType";
  songs?: Maybe<Array<Maybe<SongType>>>;
  song?: Maybe<SongType>;
  lyric?: Maybe<LyricType>;
};

export type RootQueryTypeSongArgs = {
  id: Scalars["ID"];
};

export type RootQueryTypeLyricArgs = {
  id: Scalars["ID"];
};

export type SongType = {
  __typename?: "SongType";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  lyrics?: Maybe<Array<Maybe<LyricType>>>;
};
export type GetSongsQueryVariables = {};

export type GetSongsQuery = { __typename?: "RootQueryType" } & {
  songs: Maybe<
    Array<Maybe<{ __typename?: "SongType" } & Pick<SongType, "id" | "title">>>
  >;
};

export const GetSongsDocument = gql`
  query getSongs {
    songs {
      id
      title
    }
  }
`;
export type GetSongsComponentProps = Omit<
  ReactApollo.QueryProps<GetSongsQuery, GetSongsQueryVariables>,
  "query"
>;

export const GetSongsComponent = (props: GetSongsComponentProps) => (
  <ReactApollo.Query<GetSongsQuery, GetSongsQueryVariables>
    query={GetSongsDocument}
    {...props}
  />
);

export type GetSongsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetSongsQuery, GetSongsQueryVariables>
> &
  TChildProps;
export function withGetSongs<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetSongsQuery,
    GetSongsQueryVariables,
    GetSongsProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetSongsQuery,
    GetSongsQueryVariables,
    GetSongsProps<TChildProps>
  >(GetSongsDocument, {
    alias: "withGetSongs",
    ...operationOptions
  });
}
