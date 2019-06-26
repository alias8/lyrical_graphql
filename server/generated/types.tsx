/* tslint:disable */
import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export type Maybe<T> = T | null;
export type MaybePromise<T> = Promise<T> | T;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface LyricType {
  __typename?: "LyricType";
  id?: Maybe<Scalars["ID"]>;
  likes?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
  song?: Maybe<SongType>;
}

export interface Mutation {
  __typename?: "Mutation";
  addSong?: Maybe<SongType>;
  addLyricToSong?: Maybe<SongType>;
  likeLyric?: Maybe<LyricType>;
  deleteSong?: Maybe<SongType>;
}

export interface MutationAddSongArgs {
  title?: Maybe<Scalars["String"]>;
}

export interface MutationAddLyricToSongArgs {
  content?: Maybe<Scalars["String"]>;
  songId?: Maybe<Scalars["ID"]>;
}

export interface MutationLikeLyricArgs {
  id?: Maybe<Scalars["ID"]>;
}

export interface MutationDeleteSongArgs {
  id?: Maybe<Scalars["ID"]>;
}

export interface RootQueryType {
  __typename?: "RootQueryType";
  songs?: Maybe<Array<Maybe<SongType>>>;
  song?: Maybe<SongType>;
  lyric?: Maybe<LyricType>;
}

export interface RootQueryTypeSongArgs {
  id: Scalars["ID"];
}

export interface RootQueryTypeLyricArgs {
  id: Scalars["ID"];
}

export interface SongType {
  __typename?: "SongType";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  lyrics?: Maybe<Array<Maybe<LyricType>>>;
}
export interface AddSongMutationVariables {
  title?: Maybe<Scalars["String"]>;
}

export type AddSongMutation = { __typename?: "Mutation" } & {
  addSong: Maybe<{ __typename?: "SongType" } & Pick<SongType, "title">>;
};

export interface DeleteSongMutationVariables {
  id?: Maybe<Scalars["ID"]>;
}

export type DeleteSongMutation = { __typename?: "Mutation" } & {
  deleteSong: Maybe<{ __typename?: "SongType" } & Pick<SongType, "id">>;
};

export interface GetSongsQueryVariables {}

export type GetSongsQuery = { __typename?: "RootQueryType" } & {
  songs: Maybe<
    Array<Maybe<{ __typename?: "SongType" } & Pick<SongType, "id" | "title">>>
  >;
};

export const AddSongDocument = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;
export type AddSongMutationFn = ReactApollo.MutationFn<
  AddSongMutation,
  AddSongMutationVariables
>;
export type AddSongComponentProps = Omit<
  ReactApollo.MutationProps<AddSongMutation, AddSongMutationVariables>,
  "mutation"
>;

export const AddSongComponent = (props: AddSongComponentProps) => (
  <ReactApollo.Mutation<AddSongMutation, AddSongMutationVariables>
    mutation={AddSongDocument}
    {...props}
  />
);

export type AddSongProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<AddSongMutation, AddSongMutationVariables>
> &
  TChildProps;
export function withAddSong<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    AddSongMutation,
    AddSongMutationVariables,
    AddSongProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    AddSongMutation,
    AddSongMutationVariables,
    AddSongProps<TChildProps>
  >(AddSongDocument, {
    alias: "withAddSong",
    ...operationOptions
  });
}
export const DeleteSongDocument = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;
export type DeleteSongMutationFn = ReactApollo.MutationFn<
  DeleteSongMutation,
  DeleteSongMutationVariables
>;
export type DeleteSongComponentProps = Omit<
  ReactApollo.MutationProps<DeleteSongMutation, DeleteSongMutationVariables>,
  "mutation"
>;

export const DeleteSongComponent = (props: DeleteSongComponentProps) => (
  <ReactApollo.Mutation<DeleteSongMutation, DeleteSongMutationVariables>
    mutation={DeleteSongDocument}
    {...props}
  />
);

export type DeleteSongProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<DeleteSongMutation, DeleteSongMutationVariables>
> &
  TChildProps;
export function withDeleteSong<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    DeleteSongMutation,
    DeleteSongMutationVariables,
    DeleteSongProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    DeleteSongMutation,
    DeleteSongMutationVariables,
    DeleteSongProps<TChildProps>
  >(DeleteSongDocument, {
    alias: "withDeleteSong",
    ...operationOptions
  });
}
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
