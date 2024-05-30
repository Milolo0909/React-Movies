import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import popular from "./popular/slice";
import rating from "./rating/slice";
import soonReleased from "./soonReleased/slice";
import fullMovie from "./fullMovie/slice";
import cast from "./cast/slice";
import recommendations from "./recommendations/slice";
import fullPerson from "./fullPerson/slice";
import personCredits from "./personCredits/slice";
import search from "./search/slice";

export const store = configureStore({
  reducer: {
    popular,
    rating,
    soonReleased,
    fullMovie,
    cast,
    recommendations,
    fullPerson,
    personCredits,
    search,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
