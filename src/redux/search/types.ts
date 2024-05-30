export type searchItem = {
  id: number;
  title: string;
  name: string;
  overview: string;
  backdrop_path: string;
};

export interface searchSliceState {
  results: searchItem[] | null;
}
