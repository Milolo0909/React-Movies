import { createSlice } from "@reduxjs/toolkit";
import { fetchPersonCredits } from "./asyncActions";
import { personCreditsSliceState } from "./types";

const initialState: personCreditsSliceState = {
  personCredits: [],
};

const personCreditsSlice = createSlice({
  name: "personCredits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPersonCredits.pending, (state) => {
      state.personCredits = [];
    });
    builder.addCase(fetchPersonCredits.fulfilled, (state, action) => {
      state.personCredits = action.payload;
    });
    builder.addCase(fetchPersonCredits.rejected, (state) => {
      state.personCredits = [];
    });
  },
});

export default personCreditsSlice.reducer;
