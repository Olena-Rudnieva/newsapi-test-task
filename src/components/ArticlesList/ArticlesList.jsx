import { ArticlesItem } from 'components/ArticlesItem/ArticlesItem';
import { List } from './ArticlesList.styled';

export const ArticlesList = ({ articles }) => {
  return (
    <List>
      {articles?.map((article, index) => (
        <ArticlesItem key={index} article={article} />
      ))}
    </List>
  );
};
