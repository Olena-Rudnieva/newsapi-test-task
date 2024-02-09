import PropTypes from 'prop-types';
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

ModalAddArticles.propTypes = {
  handleModalToggle: PropTypes.func.isRequired,
};
