import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} from "graphql";
import { LyricsModel } from "../models/lyric";
import { SongType } from "./song_type";

export const LyricType: any = new GraphQLObjectType({
  name: "LyricType",
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: SongType,
      resolve(parentValue) {
        return LyricsModel.findById(parentValue)
          .populate("song")
          .then(lyric => {
            console.log(lyric);
            return lyric!.song;
          });
      }
    }
  })
});
