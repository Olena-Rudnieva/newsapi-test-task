import { Container } from 'components/Container/Container';
import { Section } from './UserArticles.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectArticles } from '../../redux/articles/articlesSelector';
import { Title } from 'components/Title/Title';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../../redux/articles/articlesOperations';
import { ArticlesList } from 'components/ArticlesList/ArticlesList';
import { SearchField } from 'components/SearchField/SearchField';

const UserArticles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const page = 1;
  const articlesAmount = 10;
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(fetchArticles({ page, articlesAmount }));
  }, [dispatch]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
  };

  const filteredArticles = () => {
    const normalisedQuery = query.toLocaleLowerCase();

    return articles.filter(
      article =>
        (article.title &&
          article.title.toLocaleLowerCase().includes(normalisedQuery)) ||
        (article.description &&
          article.description.toLocaleLowerCase().includes(normalisedQuery))
    );
  };

  return (
    <Section>
      <Container>
        <Title name={'My articles'} />
        <SearchField handleSearch={handleSearch} />
        <ArticlesList articles={filteredArticles()} />
      </Container>
    </Section>
  );
};

export default UserArticles;
