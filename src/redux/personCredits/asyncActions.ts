import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPersonCredits = createAsyncThunk(
  "personCredits/fetchPersonCredits",
  async (id: string) => {
    const { data } = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/person/${id}/combined_credits?language=ru`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });

    return data.cast;
  }
);
