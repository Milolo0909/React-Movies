import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCast = createAsyncThunk(
  "cast/fetchCast",
  async (id: string) => {
    const { data } = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}/credits?language=ru`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });

    return data.cast;
  }
);
