import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFullMovie = createAsyncThunk(
  "fullMovie/fetchFullMovie",
  async (id: string) => {
    const { data } = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}?language=ru`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });

    return data;
  }
);
