import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { DeleteBtn, DeleteIcon } from './DeleteButton.styled';
import { deleteArticle } from '../../redux/articles/articlesSlice';

export const DeleteButton = ({ article }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteArticle(article));
  };

  return (
    <DeleteBtn type="button" onClick={handleDelete}>
      <DeleteIcon />
    </DeleteBtn>
  );
};

DeleteButton.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
