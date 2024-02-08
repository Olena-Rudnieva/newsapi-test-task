import { useDispatch } from 'react-redux';

import { DeleteBtn, DeleteIcon } from './DeleteButton.styled';
import { deleteArticle } from '../../redux/articles/articlesSlice';

export const DeleteButton = ({ article }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteArticle(article.id));

  return (
    <DeleteBtn type="button" onClick={handleDelete}>
      <DeleteIcon />
    </DeleteBtn>
  );
};
