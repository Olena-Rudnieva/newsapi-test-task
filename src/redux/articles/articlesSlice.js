import { createSlice } from '@reduxjs/toolkit';
// import { fetchArticles } from './articlesOperations';

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    items: [],
    pinnedArticle: '',
    isLoading: false,
    error: null,
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

  //   extraReducers: {
  //     [fetchCars.pending](state) {
  //       state.isLoading = true;
  //     },
  //     [fetchCars.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = action.payload;
  //     },
  //     [fetchCars.rejected](state, action) {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //   },
});

export const { addArticle } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
