import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSoonReleasedMovies = createAsyncThunk(
  "soonReleased/fetchSoonReleasedMovies",
  async () => {
    const { data } = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/upcoming?language=ru&page=1",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });

    return data.results;
  }
);
