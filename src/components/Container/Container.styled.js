import styled from 'styled-components';
import { theme } from 'constants/theme';

export const ContainerWrapper = styled.div`
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;

  ${theme.mq.tablet} {
    width: 576px;
  }
  ${theme.mq.desktop} {
    width: 992px;
  }
`;
