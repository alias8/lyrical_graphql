import mongoose, { Document, Model, Schema } from "mongoose";

interface ILyricDocument extends Document {
  song: mongoose.Types.Buffer;
  likes: mongoose.Schema.Types.Number;
  content: mongoose.Schema.Types.Number;
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
  content: { type: mongoose.Schema.Types.Number }
});

// tslint:disable-next-line:only-arrow-functions
LyricSchema.statics.like = function(id: string) {
  return this.findById(id).then((lyric: any) => {
    ++lyric.likes;
    return lyric.save();
  });
};

export const LyricsModel: ILyricsModel = mongoose.model<
  ILyricDocument,
  ILyricsModel
>("lyric", LyricSchema);
