import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecommendations = createAsyncThunk(
  "recommendations/fetchRecommendations",
  async (id: string) => {
    const { data } = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}/recommendations?language=ru&page=1`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });

    return data.results;
  }
);
