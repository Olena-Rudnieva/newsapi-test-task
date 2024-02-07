import { HeaderWrapper, Nav, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <StyledLink to="/">Articles</StyledLink>
        <StyledLink to="/news">NewsApiArticles</StyledLink>
      </Nav>
    </HeaderWrapper>
  );
};
