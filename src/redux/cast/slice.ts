import { createSlice } from "@reduxjs/toolkit";
import { fetchCast } from "./asyncActions";
import { castSliceState } from "./types";

const initialState: castSliceState = {
  cast: [],
};

const castSlice = createSlice({
  name: "cast",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCast.pending, (state) => {
      state.cast = [];
    });
    builder.addCase(fetchCast.fulfilled, (state, action) => {
      state.cast = action.payload;
    });
    builder.addCase(fetchCast.rejected, (state) => {
      state.cast = [];
    });
  },
});

export default castSlice.reducer;
