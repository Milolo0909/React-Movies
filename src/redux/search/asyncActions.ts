import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (q: string) => {
    const { data } = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/movie?query=${q}&include_adult=false&language=ru&page=1`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });

    return data.results;
  }
);
