import { useDispatch } from 'react-redux';

import { DeleteBtn, DeleteIcon } from './DeleteButton.styled';
import { deleteArticle } from '../../redux/articles/articlesSlice';

export const DeleteButton = ({ article }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(article.id);
    dispatch(deleteArticle(article));
  };

  return (
    <DeleteBtn type="button" onClick={handleDelete}>
      <DeleteIcon />
    </DeleteBtn>
  );
};
