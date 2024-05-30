export type FullMovieItem = {
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  tagline: string;
  release_date: string;
  runtime: number;
  genres: {
    name: string;
  }[];
};

export interface fullMovieSliceState {
  fullMovie: FullMovieItem | null;
}
