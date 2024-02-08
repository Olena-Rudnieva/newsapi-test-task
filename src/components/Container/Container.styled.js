import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;

  @media (min-width: 320px) {
    width: 375px;
  }

  @media (min-width: 576px) {
    width: 576px;
  }

  @media (min-width: 992px) {
    width: 992px;
  }
`;
