import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectArticles,
  selectTotalResults,
} from '../../redux/articles/articlesSelector';
import { fetchArticles } from '../../redux/articles/articlesOperations';
import { ArticlesList } from 'components/ArticlesList/ArticlesList';
import { Container } from 'components/Container/Container';
import { Section } from './NewsApiArticles.styled';
import { Button } from 'components/Button/Button';
import { Title } from 'components/Title/Title';

const NewsApiArticles = () => {
  const [page, setPage] = useState(1);
  const [articlesAmount, setArticlesAmount] = useState(10);
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const totalResults = useSelector(selectTotalResults);

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
        <Title name={'NewsAPI articles'} />
        <ArticlesList articles={articles} />
        {articles?.length > 0 && articles?.length < totalResults && (
          <Button
            type={'button'}
            text={'Load more'}
            handleClick={handleClick}
          />
        )}
      </Container>
    </Section>
  );
};

export default NewsApiArticles;
