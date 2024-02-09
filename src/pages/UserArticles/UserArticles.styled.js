import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Section = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;
  text-align: center;
`;

export const LoadingText = styled.p`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.25;
  color: ${theme.colors.black};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${theme.mq.tablet} {
    flex-direction: row;
    align-items: baseline;
  }
`;
