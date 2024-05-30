import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "./asyncActions";
import { popularSliceState } from "./types";

const initialState: popularSliceState = {
  popularMovies: [],
};

const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.pending, (state) => {
      state.popularMovies = [];
    });
    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      state.popularMovies = action.payload;
    });
    builder.addCase(fetchPopularMovies.rejected, (state) => {
      state.popularMovies = [];
    });
  },
});

export default popularSlice.reducer;
