import {
  ArticlesItemWrapper,
  Image,
  ImageWrapper,
  Text,
  Title,
} from './ArticlesItem.styled';
import defaultImage from '../../images/defaultImage.jpg';

export const ArticlesItem = ({ article }) => {
  const { author, title, description, urlToImage } = article;

  return (
    <ArticlesItemWrapper>
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
