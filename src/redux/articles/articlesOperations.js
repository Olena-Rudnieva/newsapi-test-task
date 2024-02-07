import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'constants/api';

const API_KEY = 'f837516e3e784c7b89ebae4eca32a8aa';
axios.defaults.baseURL = `${BASE_URL}`;

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ query, articlesAmount }, thunkAPI) => {
    try {
      const response = await axios.get(
        `everything?q=${query}&pageSize=${articlesAmount}&apiKey=${API_KEY}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
