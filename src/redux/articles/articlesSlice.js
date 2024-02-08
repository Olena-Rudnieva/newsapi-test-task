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
    deleteArticle: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    togglePin: (state, action) => {
      const { articleId, isPinned } = action.payload;

      if (isPinned) {
        state.pinnedArticle = articleId;
        const index = state.items.findIndex(item => item.id === articleId);
        const pinnedItem = state.items[index];
        state.items.splice(index, 1);
        state.items.unshift(pinnedItem);
      } else {
        state.pinnedArticle = '';
      }
    },
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

export const { addArticle, deleteArticle, togglePin } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
