import mongoose, { Document, Model, Schema } from "mongoose";
import { profanityFilter } from "./song";

interface ILyricDocument extends Document {
  song: mongoose.Types.Buffer;
  likes: number;
  content: mongoose.Schema.Types.String;
}

export interface ILyricsModel extends Model<ILyricDocument> {
  like: (id: string) => any;
}

const LyricSchema = new Schema<ILyricDocument>({
  song: {
    type: Schema.Types.ObjectId,
    ref: "song"
  },
  likes: { type: mongoose.Schema.Types.Number, default: 0 },
  content: {
    type: mongoose.Schema.Types.String,
    validate: {
      // tslint:disable-next-line:only-arrow-functions
      validator(v) {
        return !profanityFilter.isProfane(v);
      },
      // @ts-ignore
      message: props => `No profanity allowed!`
    }
  }
});

// tslint:disable-next-line:only-arrow-functions
LyricSchema.statics.like = function(id: string) {
  return this.findById(id).then((lyric: ILyricDocument) => {
    ++lyric.likes;
    return lyric.save();
  });
};

export const LyricsModel: ILyricsModel = mongoose.model<
  ILyricDocument,
  ILyricsModel
>("lyrics", LyricSchema);
