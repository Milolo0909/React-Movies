import { createSlice } from "@reduxjs/toolkit";
import { fetchSearch } from "./asyncActions";
import { searchSliceState } from "./types";

const initialState: searchSliceState = {
  results: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.results = action.payload;
    });
    builder.addCase(fetchSearch.rejected, (state) => {
      state.results = null;
    });
  },
});

export default searchSlice.reducer;
