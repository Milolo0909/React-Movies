import { createSlice } from "@reduxjs/toolkit";
import { fetchRecommendations } from "./asyncActions";
import { recommendationsSliceState } from "./types";

const initialState: recommendationsSliceState = {
  recommendations: [],
};

const recommendationsSlice = createSlice({
  name: "recommendations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecommendations.pending, (state) => {
      state.recommendations = [];
    });
    builder.addCase(fetchRecommendations.fulfilled, (state, action) => {
      state.recommendations = action.payload;
    });
    builder.addCase(fetchRecommendations.rejected, (state) => {
      state.recommendations = [];
    });
  },
});

export default recommendationsSlice.reducer;
