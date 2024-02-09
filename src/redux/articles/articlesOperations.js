import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constants/api';
import { v4 as uuidv4 } from 'uuid';

const API_KEY = '5869fa072f3e4d408435ed450e5fb8e2';

axios.defaults.baseURL = `${BASE_URL}`;

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ articlesAmount, page }, thunkAPI) => {
    try {
      const response = await axios.get(`everything`, {
        params: {
          q: 'the',
          pageSize: articlesAmount,
          page,
          apiKey: API_KEY,
        },
      });

      const receivedArticles = response.data.articles.map(article => ({
        ...article,
        id: uuidv4(),
      }));

      return {
        articles: receivedArticles,
        totalResults: response.data.totalResults,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
