import { createSlice } from "@reduxjs/toolkit";
import { fetchSoonReleasedMovies } from "./asyncActions";
import { soonReleasedSliceState } from "./types";

const initialState: soonReleasedSliceState = {
  soonReleasedMovies: [],
};

const soonReleasedSlice = createSlice({
  name: "soonReleased",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSoonReleasedMovies.pending, (state) => {
      state.soonReleasedMovies = [];
    });
    builder.addCase(fetchSoonReleasedMovies.fulfilled, (state, action) => {
      state.soonReleasedMovies = action.payload;
    });
    builder.addCase(fetchSoonReleasedMovies.rejected, (state) => {
      state.soonReleasedMovies = [];
    });
  },
});

export default soonReleasedSlice.reducer;
