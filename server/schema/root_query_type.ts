import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType
} from "graphql";
import { CommentModel } from "../models/comment";
import { LyricsModel } from "../models/lyric";
import { SongModel } from "../models/song";
import { CommentType } from "./comment_type";
import { LyricType } from "./lyric_type";
import { SongType } from "./song_type";

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    songs: {
      type: new GraphQLList(SongType),
      resolve() {
        return SongModel.find({});
      }
    },
    song: {
      type: SongType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      // @ts-ignore
      resolve(parentValue, { id }) {
        return SongModel.findById(id);
      }
    },
    lyric: {
      type: LyricType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      // @ts-ignore
      resolve(parentValue, { id }) {
        return LyricsModel.findById(id);
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve() {
        return CommentModel.find({});
      }
    },
    comment: {
      type: CommentType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      // @ts-ignore
      resolve(parentValue, { id }) {
        return CommentModel.findById(id);
      }
    }
  })
});
