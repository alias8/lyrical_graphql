import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { CommentModel } from "../models/comment";
import { LyricsModel } from "../models/lyric";
import { SongModel } from "../models/song";
import { CommentType } from "./comment_type";
import { LyricType } from "./lyric_type";
import { SongType } from "./song_type";

export const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString }
      },
      // @ts-ignore
      resolve(parentValue, { title }) {
        return new SongModel({ title }).save();
      }
    },
    addLyricToSong: {
      type: SongType,
      args: {
        content: { type: GraphQLString },
        songId: { type: GraphQLID }
      },
      // @ts-ignore
      resolve(parentValue, { content, songId }) {
        return SongModel.addLyric(songId, content);
      }
    },
    likeLyric: {
      type: LyricType,
      args: { id: { type: GraphQLID } },
      // @ts-ignore
      resolve(parentValue, { id }) {
        return LyricsModel.like(id);
      }
    },
    deleteSong: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      // @ts-ignore
      resolve(parentValue, { id }) {
        return SongModel.remove({ _id: id });
      }
    },
    addComment: {
      // todo
      type: CommentType,
      args: {
        content: { type: GraphQLString }
        // songId: { type: GraphQLID } // james add later
      },
      // @ts-ignore
      resolve(parentValue, { content }) {
        return new CommentModel(content).save();
      }
    }
  }
});
