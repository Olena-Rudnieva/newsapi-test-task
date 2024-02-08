import { Container } from 'components/Container/Container';
import { Section } from './UserArticles.styled';
import { useSelector } from 'react-redux';
import { selectArticles } from '../../redux/articles/articlesSelector';
import { Title } from 'components/Title/Title';

const UserArticles = () => {
  const articles = useSelector(selectArticles);

  console.log(articles);

  return (
    <Section>
      <Container>
        {/* {isLoading && !error && <Loader />} */}
        <Title name={'My articles'} />
        {/* <ArticlesList articles={articles} /> */}
      </Container>
    </Section>
  );
};

export default UserArticles;
