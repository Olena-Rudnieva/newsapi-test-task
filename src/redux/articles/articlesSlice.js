import { createSlice } from '@reduxjs/toolkit';
import { fetchArticles } from './articlesOperations';

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    items: [],
    totalResults: null,
    pinnedArticle: '',
    isLoading: false,
  },
  reducers: {
    addArticle: (state, action) => {
      state.items.push(action.payload);
    },
    // deleteArticle: (state, action) => {
    //   state.favorites = state.items.filter(
    //     item => item.id !== action.payload.id
    //   );
    // },
  },

  extraReducers: builder => {
    builder.addCase(fetchArticles.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.articles;
      state.totalResults = action.payload.totalPages;
    });

    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addArticle } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
