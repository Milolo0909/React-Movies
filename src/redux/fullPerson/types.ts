export type FullPersonItem = {
  name: string;
  biography: string;
  birthday: string;
  gender: number;
  place_of_birth: string;
  profile_path: string;
};

export interface fullPersonSliceState {
  fullPerson: FullPersonItem | null;
}
