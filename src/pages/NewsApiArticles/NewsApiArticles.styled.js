import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Section = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;
  text-align: center;
`;

export const LoadingText = styled.p`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.25;
  color: ${theme.colors.black};
  margin-top: 100px;
`;
