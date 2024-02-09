import { ArticlesItem } from 'components/ArticlesItem/ArticlesItem';
import { List } from './ArticlesList.styled';

export const ArticlesList = ({ articles, userButtons }) => {
  return (
    <List>
      {articles?.map((article, index) => (
        <ArticlesItem key={index} article={article} userButtons={userButtons} />
      ))}
    </List>
  );
};
