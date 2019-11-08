import { CommentModel } from "../models/comment";
import { LyricsModel } from "../models/lyric";
import { SongModel } from "../models/song";
import { sampleSongs } from "./sample";

export async function loadSampleData() {
  try {
    await SongModel.deleteMany({});
    await LyricsModel.deleteMany({});
    await CommentModel.deleteMany({});
    Promise.all(
      sampleSongs.map(async song => {
        const newSong = await new SongModel({
          title: song.title
        }).save();
        return Promise.all([
          song.lyrics.map(lyric => SongModel.addLyric(newSong.id, lyric)),
          song.comments.map(comment => {
            return new CommentModel({
              // todo: associate with song later
              content: comment
            }).save();
          })
        ]);
      })
    );
  } catch (e) {
    console.log(e);
  }
}
