import { createSlice } from "@reduxjs/toolkit";
import { fetchRatingMovies } from "./asyncActions";
import { ratingSliceState } from "./types";

const initialState: ratingSliceState = {
  ratingMovies: [],
};

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRatingMovies.pending, (state) => {
      state.ratingMovies = [];
    });
    builder.addCase(fetchRatingMovies.fulfilled, (state, action) => {
      state.ratingMovies = action.payload;
    });
    builder.addCase(fetchRatingMovies.rejected, (state) => {
      state.ratingMovies = [];
    });
  },
});

export default ratingSlice.reducer;
