import { createSlice } from "@reduxjs/toolkit";
import { fetchFullMovie } from "./asyncActions";
import { fullMovieSliceState } from "./types";

const initialState: fullMovieSliceState = {
  fullMovie: null,
};

const fullMovieSlice = createSlice({
  name: "fullMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFullMovie.pending, (state) => {
      state.fullMovie = null;
    });
    builder.addCase(fetchFullMovie.fulfilled, (state, action) => {
      state.fullMovie = action.payload;
    });
    builder.addCase(fetchFullMovie.rejected, (state) => {
      state.fullMovie = null;
    });
  },
});

export default fullMovieSlice.reducer;
