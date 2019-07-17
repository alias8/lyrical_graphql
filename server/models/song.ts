import mongoose, { Document, Model, Schema } from "mongoose";
import { LyricsModel } from "./lyric";

export interface ISongDocument extends Document {
  title: string;
  user: mongoose.Types.Buffer;
  lyrics: mongoose.Types.Buffer[];
}

export interface ISongModel extends Model<ISongDocument> {
  addLyric: (id: string, content: string) => any;
  findLyrics: (id: string) => any;
}

const SongSchema = new Schema<ISongDocument>({
  title: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  lyrics: [
    {
      type: Schema.Types.ObjectId,
      ref: "lyrics"
    }
  ]
});

SongSchema.statics.addLyric = function(id: string, content: string) {
  return this.findById(id).then((existingSong: ISongDocument) => {
    const newLyric = new LyricsModel({ content, song: existingSong });
    existingSong.lyrics.push(newLyric as any);
    return Promise.all([newLyric.save(), existingSong.save()]).then(
      // @ts-ignore
      ([lyrics, song]) => song
    );
  });
};

SongSchema.statics.findLyrics = function(id: string) {
  return this.findById(id)
    .populate("lyrics")
    .then((song: ISongDocument) => song.lyrics);
};

export const SongModel: ISongModel = mongoose.model<ISongDocument, ISongModel>(
  "song",
  SongSchema
);
