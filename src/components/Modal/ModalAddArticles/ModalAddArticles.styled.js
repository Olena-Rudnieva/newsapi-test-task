import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Wrapper = styled.div`
  padding: 40px 20px;
  width: 280px;

  ${theme.mq.tablet} {
    padding: 40px;
    width: 549px;
  }
`;

export const Title = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.25;
  letter-spacing: -0.48px;
  color: ${theme.colors.black};
  margin-bottom: 30px;
`;
