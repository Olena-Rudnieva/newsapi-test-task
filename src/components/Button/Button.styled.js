import styled from 'styled-components';
import { theme } from 'constants/theme';

export const ButtonStyle = styled.button`
  color: ${theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.43;
  background: ${theme.colors.dark};
  padding: 8px 20px;
  border-radius: 12px;
  border: none;
  box-shadow: ${theme.boxShadow.article};
  transition: background 300ms ${theme.transition};

  &:hover,
  &:focus {
    background: ${theme.colors.grey};
  }
`;
