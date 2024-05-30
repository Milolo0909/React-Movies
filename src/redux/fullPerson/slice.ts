import { createSlice } from "@reduxjs/toolkit";
import { fetchFullPerson } from "./asyncActions";
import { fullPersonSliceState } from "./types";

const initialState: fullPersonSliceState = {
  fullPerson: null,
};

const fullPersonSlice = createSlice({
  name: "fullPerson",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFullPerson.pending, (state) => {
      state.fullPerson = null;
    });
    builder.addCase(fetchFullPerson.fulfilled, (state, action) => {
      state.fullPerson = action.payload;
    });
    builder.addCase(fetchFullPerson.rejected, (state) => {
      state.fullPerson = null;
    });
  },
});

export default fullPersonSlice.reducer;
