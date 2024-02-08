import styled from 'styled-components';
import { theme } from 'constants/theme';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  background: linear-gradient(to bottom, #ffffff, #9cb2c8);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 70px;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-shadow: 2px 2px 10px #2d3e56;
  font-size: 14px;
  font-weight: ${theme.fontWeight.regular};
  line-height: 1.1;
  &.active {
    color: #1d2946;
  }

  @media (min-width: 375px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
    font-weight: ${theme.fontWeight.medium};
  }
`;
