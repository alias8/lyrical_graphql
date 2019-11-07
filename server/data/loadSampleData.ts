import { LyricsModel } from "../models/lyric";
import { SongModel } from "../models/song";
import { sampleSongs } from "./sample";

export async function loadSampleData() {
  try {
    await SongModel.deleteMany({ title: /.*/ });
    await LyricsModel.deleteMany({ title: /.*/ });
    Promise.all(
      sampleSongs.map(song =>
        new SongModel({
          title: song.title
        })
          .save()
          .then(newSong =>
            Promise.all(
              song.lyrics.map(lyric => SongModel.addLyric(newSong.id, lyric))
            )
          )
      )
    );
  } catch (e) {
    console.log(e);
  }
}
