import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFullPerson = createAsyncThunk(
  "fullPerson/fetchFullPerson",
  async (id: string) => {
    const { data } = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/person/${id}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });

    return data;
  }
);
