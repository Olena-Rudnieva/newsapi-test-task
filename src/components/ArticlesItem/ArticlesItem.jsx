import {
  ArticlesItemWrapper,
  Image,
  ImageWrapper,
  Text,
  Title,
} from './ArticlesItem.styled';
import defaultImage from '../../images/defaultImage.jpg';
import { DeleteButton } from 'components/DeleteButton/DeleteButton';
import { PinnedButton } from 'components/PinnedButton/PinnedButton';

export const ArticlesItem = ({ article, userButtons }) => {
  const { author, title, description, urlToImage } = article;

  return (
    <ArticlesItemWrapper>
      {userButtons && (
        <>
          <DeleteButton article={article} />
          <PinnedButton article={article} />
        </>
      )}
      <ImageWrapper>
        <Image src={urlToImage || defaultImage} alt={title} />
      </ImageWrapper>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <Text>
        <b>{author}</b>
      </Text>
    </ArticlesItemWrapper>
  );
};
