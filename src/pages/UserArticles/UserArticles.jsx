import { Container } from 'components/Container/Container';
import { Section, Wrapper } from './UserArticles.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectArticles } from '../../redux/articles/articlesSelector';
import { Title } from 'components/Title/Title';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../../redux/articles/articlesOperations';
import { ArticlesList } from 'components/ArticlesList/ArticlesList';
import { SearchField } from 'components/SearchField/SearchField';
import { Button } from 'components/Button/Button';
import { BasicModalWindow } from 'components/Modal/BasicModalWindow/BasicModalWindow';
import { ModalAddArticles } from 'components/Modal/ModalAddArticles/ModalAddArticles';

const UserArticles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const page = 1;
  const articlesAmount = 10;
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(fetchArticles({ page, articlesAmount }));
  }, [dispatch]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
  };

  const handleModal = () => {
    setModal(state => !state);
    document.body.classList.toggle('modal-open');
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
        <Wrapper>
          <SearchField handleSearch={handleSearch} />
          <Button
            type={'button'}
            text={'Add article'}
            handleClick={handleModal}
          />
        </Wrapper>
        <ArticlesList articles={filteredArticles()} />
        {modal && (
          <BasicModalWindow handleModalToggle={handleModal}>
            <ModalAddArticles handleModalToggle={handleModal} />
          </BasicModalWindow>
        )}
      </Container>
    </Section>
  );
};

export default UserArticles;
