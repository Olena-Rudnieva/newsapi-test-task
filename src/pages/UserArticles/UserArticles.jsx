import { Container } from 'components/Container/Container';
import { Section } from './UserArticles.styled';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
} from '../../redux/articles/articlesSelector';
import { Title } from 'components/Title/Title';

const UserArticles = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Section>
      <Container>
        <Title name={'My articles'} />
        {isLoading && !error && <b>Request in progress...</b>}
        {/* <ArticlesList articles={articles} /> */}
      </Container>
    </Section>
  );
};

export default UserArticles;
