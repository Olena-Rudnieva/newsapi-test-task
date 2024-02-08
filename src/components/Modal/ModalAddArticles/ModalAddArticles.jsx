import { Wrapper, Title } from './ModalAddArticles.styled';
import { NewArticleForm } from './NewArticleForm/NewArticleForm';

export const ModalAddArticles = ({ handleModalToggle }) => {
  return (
    <Wrapper>
      <Title>Add new article</Title>
      <NewArticleForm handleModalToggle={handleModalToggle} />
    </Wrapper>
  );
};
