export interface ISong {
  id: string;
  title?: string;
  lyrics?: ILyric[];
}

export interface ILyric {
  id: string;
  likes?: number;
  content?: string;
  song?: ISong;
}
