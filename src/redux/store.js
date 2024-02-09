import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { articlesReducer } from './articles/articlesSlice';

const articlesPersistConfig = {
  key: 'articles',
  storage,
  whitelist: ['pinnedArticle'],
};

export const store = configureStore({
  reducer: {
    articles: persistReducer(articlesPersistConfig, articlesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
