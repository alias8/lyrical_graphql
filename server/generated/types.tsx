/* tslint:disable */
import gql from "graphql-tag";
import * as ReactApollo from "react-apollo";
import * as React from "react";
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

export type CommentType = {
  __typename?: "CommentType";
  id?: Maybe<Scalars["ID"]>;
  content?: Maybe<Scalars["String"]>;
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
  addComment?: Maybe<CommentType>;
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

export type MutationAddCommentArgs = {
  content?: Maybe<Scalars["String"]>;
};

export type RootQueryType = {
  __typename?: "RootQueryType";
  songs?: Maybe<Array<Maybe<SongType>>>;
  song?: Maybe<SongType>;
  lyric?: Maybe<LyricType>;
  comments?: Maybe<Array<Maybe<CommentType>>>;
  comment?: Maybe<CommentType>;
};

export type RootQueryTypeSongArgs = {
  id: Scalars["ID"];
};

export type RootQueryTypeLyricArgs = {
  id: Scalars["ID"];
};

export type RootQueryTypeCommentArgs = {
  id: Scalars["ID"];
};

export type SongType = {
  __typename?: "SongType";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  lyrics?: Maybe<Array<Maybe<LyricType>>>;
};

export type Subscription = {
  __typename?: "Subscription";
  commentAdded?: Maybe<CommentType>;
};
export type AddSongMutationVariables = {
  title?: Maybe<Scalars["String"]>;
};

export type AddSongMutation = { __typename?: "Mutation" } & {
  addSong: Maybe<{ __typename?: "SongType" } & Pick<SongType, "title">>;
};

export type DeleteSongMutationVariables = {
  id?: Maybe<Scalars["ID"]>;
};

export type DeleteSongMutation = { __typename?: "Mutation" } & {
  deleteSong: Maybe<{ __typename?: "SongType" } & Pick<SongType, "id">>;
};

export type AddLyricToSongMutationVariables = {
  content?: Maybe<Scalars["String"]>;
  songId?: Maybe<Scalars["ID"]>;
};

export type AddLyricToSongMutation = { __typename?: "Mutation" } & {
  addLyricToSong: Maybe<
    { __typename?: "SongType" } & Pick<SongType, "id" | "title"> & {
        lyrics: Maybe<
          Array<
            Maybe<
              { __typename?: "LyricType" } & Pick<
                LyricType,
                "id" | "content" | "likes"
              >
            >
          >
        >;
      }
  >;
};

export type LikeLyricMutationVariables = {
  id?: Maybe<Scalars["ID"]>;
};

export type LikeLyricMutation = { __typename?: "Mutation" } & {
  likeLyric: Maybe<
    { __typename?: "LyricType" } & Pick<LyricType, "id" | "likes">
  >;
};

export type AddCommentMutationVariables = {
  content?: Maybe<Scalars["String"]>;
};

export type AddCommentMutation = { __typename?: "Mutation" } & {
  addComment: Maybe<
    { __typename?: "CommentType" } & Pick<CommentType, "id" | "content">
  >;
};

export type GetSongsQueryVariables = {};

export type GetSongsQuery = { __typename?: "RootQueryType" } & {
  songs: Maybe<
    Array<Maybe<{ __typename?: "SongType" } & Pick<SongType, "id" | "title">>>
  >;
};

export type GetSongQueryVariables = {
  id: Scalars["ID"];
};

export type GetSongQuery = { __typename?: "RootQueryType" } & {
  song: Maybe<
    { __typename?: "SongType" } & Pick<SongType, "id" | "title"> & {
        lyrics: Maybe<
          Array<
            Maybe<
              { __typename?: "LyricType" } & Pick<
                LyricType,
                "id" | "content" | "likes"
              >
            >
          >
        >;
      }
  >;
};

export type GetCommentsQueryVariables = {};

export type GetCommentsQuery = { __typename?: "RootQueryType" } & {
  comments: Maybe<
    Array<
      Maybe<
        { __typename?: "CommentType" } & Pick<CommentType, "id" | "content">
      >
    >
  >;
};

export type OnCommentAddedSubscriptionVariables = {};

export type OnCommentAddedSubscription = { __typename?: "Subscription" } & {
  commentAdded: Maybe<
    { __typename?: "CommentType" } & Pick<CommentType, "id" | "content">
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
export const AddLyricToSongDocument = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
export type AddLyricToSongMutationFn = ReactApollo.MutationFn<
  AddLyricToSongMutation,
  AddLyricToSongMutationVariables
>;
export type AddLyricToSongComponentProps = Omit<
  ReactApollo.MutationProps<
    AddLyricToSongMutation,
    AddLyricToSongMutationVariables
  >,
  "mutation"
>;

export const AddLyricToSongComponent = (
  props: AddLyricToSongComponentProps
) => (
  <ReactApollo.Mutation<AddLyricToSongMutation, AddLyricToSongMutationVariables>
    mutation={AddLyricToSongDocument}
    {...props}
  />
);

export type AddLyricToSongProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    AddLyricToSongMutation,
    AddLyricToSongMutationVariables
  >
> &
  TChildProps;
export function withAddLyricToSong<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    AddLyricToSongMutation,
    AddLyricToSongMutationVariables,
    AddLyricToSongProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    AddLyricToSongMutation,
    AddLyricToSongMutationVariables,
    AddLyricToSongProps<TChildProps>
  >(AddLyricToSongDocument, {
    alias: "withAddLyricToSong",
    ...operationOptions
  });
}
export const LikeLyricDocument = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;
export type LikeLyricMutationFn = ReactApollo.MutationFn<
  LikeLyricMutation,
  LikeLyricMutationVariables
>;
export type LikeLyricComponentProps = Omit<
  ReactApollo.MutationProps<LikeLyricMutation, LikeLyricMutationVariables>,
  "mutation"
>;

export const LikeLyricComponent = (props: LikeLyricComponentProps) => (
  <ReactApollo.Mutation<LikeLyricMutation, LikeLyricMutationVariables>
    mutation={LikeLyricDocument}
    {...props}
  />
);

export type LikeLyricProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<LikeLyricMutation, LikeLyricMutationVariables>
> &
  TChildProps;
export function withLikeLyric<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    LikeLyricMutation,
    LikeLyricMutationVariables,
    LikeLyricProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    LikeLyricMutation,
    LikeLyricMutationVariables,
    LikeLyricProps<TChildProps>
  >(LikeLyricDocument, {
    alias: "withLikeLyric",
    ...operationOptions
  });
}
export const AddCommentDocument = gql`
  mutation AddComment($content: String) {
    addComment(content: $content) {
      id
      content
    }
  }
`;
export type AddCommentMutationFn = ReactApollo.MutationFn<
  AddCommentMutation,
  AddCommentMutationVariables
>;
export type AddCommentComponentProps = Omit<
  ReactApollo.MutationProps<AddCommentMutation, AddCommentMutationVariables>,
  "mutation"
>;

export const AddCommentComponent = (props: AddCommentComponentProps) => (
  <ReactApollo.Mutation<AddCommentMutation, AddCommentMutationVariables>
    mutation={AddCommentDocument}
    {...props}
  />
);

export type AddCommentProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<AddCommentMutation, AddCommentMutationVariables>
> &
  TChildProps;
export function withAddComment<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    AddCommentMutation,
    AddCommentMutationVariables,
    AddCommentProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    AddCommentMutation,
    AddCommentMutationVariables,
    AddCommentProps<TChildProps>
  >(AddCommentDocument, {
    alias: "withAddComment",
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
export const GetSongDocument = gql`
  query getSong($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
export type GetSongComponentProps = Omit<
  ReactApollo.QueryProps<GetSongQuery, GetSongQueryVariables>,
  "query"
> &
  ({ variables: GetSongQueryVariables; skip?: false } | { skip: true });

export const GetSongComponent = (props: GetSongComponentProps) => (
  <ReactApollo.Query<GetSongQuery, GetSongQueryVariables>
    query={GetSongDocument}
    {...props}
  />
);

export type GetSongProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetSongQuery, GetSongQueryVariables>
> &
  TChildProps;
export function withGetSong<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetSongQuery,
    GetSongQueryVariables,
    GetSongProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetSongQuery,
    GetSongQueryVariables,
    GetSongProps<TChildProps>
  >(GetSongDocument, {
    alias: "withGetSong",
    ...operationOptions
  });
}
export const GetCommentsDocument = gql`
  query getComments {
    comments {
      id
      content
    }
  }
`;
export type GetCommentsComponentProps = Omit<
  ReactApollo.QueryProps<GetCommentsQuery, GetCommentsQueryVariables>,
  "query"
>;

export const GetCommentsComponent = (props: GetCommentsComponentProps) => (
  <ReactApollo.Query<GetCommentsQuery, GetCommentsQueryVariables>
    query={GetCommentsDocument}
    {...props}
  />
);

export type GetCommentsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetCommentsQuery, GetCommentsQueryVariables>
> &
  TChildProps;
export function withGetComments<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetCommentsQuery,
    GetCommentsQueryVariables,
    GetCommentsProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetCommentsQuery,
    GetCommentsQueryVariables,
    GetCommentsProps<TChildProps>
  >(GetCommentsDocument, {
    alias: "withGetComments",
    ...operationOptions
  });
}
export const OnCommentAddedDocument = gql`
  subscription onCommentAdded {
    commentAdded {
      id
      content
    }
  }
`;
export type OnCommentAddedComponentProps = Omit<
  ReactApollo.SubscriptionProps<
    OnCommentAddedSubscription,
    OnCommentAddedSubscriptionVariables
  >,
  "subscription"
>;

export const OnCommentAddedComponent = (
  props: OnCommentAddedComponentProps
) => (
  <ReactApollo.Subscription<
    OnCommentAddedSubscription,
    OnCommentAddedSubscriptionVariables
  >
    subscription={OnCommentAddedDocument}
    {...props}
  />
);

export type OnCommentAddedProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    OnCommentAddedSubscription,
    OnCommentAddedSubscriptionVariables
  >
> &
  TChildProps;
export function withOnCommentAdded<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    OnCommentAddedSubscription,
    OnCommentAddedSubscriptionVariables,
    OnCommentAddedProps<TChildProps>
  >
) {
  return ReactApollo.withSubscription<
    TProps,
    OnCommentAddedSubscription,
    OnCommentAddedSubscriptionVariables,
    OnCommentAddedProps<TChildProps>
  >(OnCommentAddedDocument, {
    alias: "withOnCommentAdded",
    ...operationOptions
  });
}
