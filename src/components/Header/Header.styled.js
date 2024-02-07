import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  background: linear-gradient(to bottom, #ffffff, #1976d2);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 70px;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-shadow: 2px 2px 10px #2d3e56;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.1;
  &.active {
    color: #0b44cd;
  }

  @media (min-width: 375px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
    font-weight: 600;
  }
`;
