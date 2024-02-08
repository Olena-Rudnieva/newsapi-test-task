import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constants/api';

const API_KEY = '5869fa072f3e4d408435ed450e5fb8e2';

axios.defaults.baseURL = `${BASE_URL}`;

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ articlesAmount, page }, thunkAPI) => {
    try {
      const response = await axios.get(`top-headlines`, {
        params: {
          country: 'us',
          pageSize: articlesAmount,
          page,
          apiKey: API_KEY,
        },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
