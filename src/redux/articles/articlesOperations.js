import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constants/api';

const API_KEY = 'f837516e3e784c7b89ebae4eca32a8aa';
const proxyURL = 'https://corsproxy.io/';
axios.defaults.baseURL = `${proxyURL}${BASE_URL}`;

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ query, articlesAmount, page }, thunkAPI) => {
    try {
      const searchQuery = query || 'any';
      const response = await axios.get(
        `everything?q=${searchQuery}&pageSize=${articlesAmount}&page=${page}&apiKey=${API_KEY}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
