export type Maybe<T> = T | null;
export type MaybePromise<T> = Promise<T> | T;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface AddLyricToSong {
  __typename?: "addLyricToSong";
  addLyricToSong?: Maybe<Song>;
}

export interface AddLyricToSongAddLyricToSongArgs {
  content: Scalars["String"];
  songId: Scalars["ID"];
}

export interface AddSong {
  __typename?: "AddSong";
  AddSong?: Maybe<Song>;
}

export interface AddSongAddSongArgs {
  title: Scalars["String"];
}

export interface DeleteSong {
  __typename?: "deleteSong";
  deleteSong?: Maybe<Song>;
}

export interface DeleteSongDeleteSongArgs {
  id: Scalars["ID"];
}

export interface LikeLyric {
  __typename?: "likeLyric";
  likeLyric?: Maybe<Lyric>;
}

export interface LikeLyricLikeLyricArgs {
  songId: Scalars["ID"];
}

export interface Lyric {
  __typename?: "Lyric";
  id: Scalars["ID"];
  likes?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
  song?: Maybe<Song>;
}

export interface Mutation {
  __typename?: "Mutation";
  addSong: Song;
  addLyricToSong?: Maybe<Song>;
  likeLyric?: Maybe<Lyric>;
  deleteSong?: Maybe<Song>;
}

export interface MutationAddSongArgs {
  title?: Maybe<Scalars["String"]>;
}

export interface MutationAddLyricToSongArgs {
  content: Scalars["String"];
  songId: Scalars["ID"];
}

export interface MutationLikeLyricArgs {
  songId: Scalars["ID"];
}

export interface MutationDeleteSongArgs {
  id: Scalars["ID"];
}

export interface Song {
  __typename?: "Song";
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  lyrics?: Maybe<Array<Maybe<Lyric>>>;
}
