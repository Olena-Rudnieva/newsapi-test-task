import { HeaderWrapper, Nav, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <StyledLink to="/">UserArticles</StyledLink>
        <StyledLink to="/news">NewsApiArticles</StyledLink>
      </Nav>
    </HeaderWrapper>
  );
};
