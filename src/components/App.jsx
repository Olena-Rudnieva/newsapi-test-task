import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components/Layout/Layout';

const ArticlesPage = lazy(() => import('../pages/Articles/Articles'));
const NewsApiArticlesPage = lazy(() =>
  import('../pages/NewsApiArticles/NewsApiArticles')
);

export const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ArticlesPage />} />
        <Route path="/news" element={<NewsApiArticlesPage />} />
        <Route path="*" element={<ArticlesPage />} />
      </Route>
    </Routes>
  </>
);
