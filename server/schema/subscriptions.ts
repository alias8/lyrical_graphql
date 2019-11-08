import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { CommentModel } from "../models/comment";
import { LyricsModel } from "../models/lyric";
import { SongModel } from "../models/song";
import { CommentType } from "./comment_type";
import { LyricType } from "./lyric_type";
import { SongType } from "./song_type";

export const subscriptions = new GraphQLObjectType({
  name: "Subscription",
  fields: {
    commentAdded: {
      type: CommentType
    }
  }
});
