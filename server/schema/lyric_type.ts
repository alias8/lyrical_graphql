import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} from "graphql";
import { LyricsModel } from "../models/lyric";

export const LyricType = new GraphQLObjectType({
  name: "LyricType",
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: require("./song_type"),
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
