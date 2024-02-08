import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectArticles,
  selectError,
  selectIsLoading,
} from '../../redux/articles/articlesSelector';
import { fetchArticles } from '../../redux/articles/articlesOperations';
import { Loader } from 'components/Loader/Loader';
import { ArticlesList } from 'components/ArticlesList/ArticlesList';
import { Container } from 'components/Container/Container';
import { Section } from './NewsApiArticles.styled';
import { Button } from 'components/Button/Button';

const NewsApiArticles = () => {
  const [page, setPage] = useState(1);
  const [articlesAmount, setArticlesAmount] = useState(10);
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchArticles({ articlesAmount, page }));
  }, [dispatch, page, articlesAmount]);

  const handleClick = () => {
    setPage(prevState => prevState + 1);
    setArticlesAmount(prevState => prevState + 10);
  };

  return (
    <Section>
      <Container>
        {isLoading && !error && <Loader />}
        <ArticlesList articles={articles} />
        <Button type={'button'} text={'Load more'} handleClick={handleClick} />
      </Container>
    </Section>
  );
};

export default NewsApiArticles;
