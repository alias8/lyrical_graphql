import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from "graphql";
import { SongModel } from "../models/song";
import { LyricType } from "./lyric_type";

export const SongType = new GraphQLObjectType({
  name: "SongType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    lyrics: {
      type: new GraphQLList(LyricType),
      resolve(parentValue) {
        return SongModel.findLyrics(parentValue.id);
      }
    }
  })
});
