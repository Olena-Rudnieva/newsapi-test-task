import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectPinnedArticle } from '../../redux/articles/articlesSelector';
import { IconEmpty, IconFilled, Pin } from './PinnedButton.styled';
import { togglePin } from '../../redux/articles/articlesSlice';

export const PinnedButton = ({ article }) => {
  const dispatch = useDispatch();
  const pinnedArticle = useSelector(selectPinnedArticle);

  const handleTogglePin = () => {
    const isPinned = article.id === pinnedArticle ? false : true;
    dispatch(togglePin({ articleId: article.id, isPinned }));
  };

  return (
    <Pin type="button" onClick={handleTogglePin}>
      {article.id === pinnedArticle ? <IconFilled /> : <IconEmpty />}
    </Pin>
  );
};

PinnedButton.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
