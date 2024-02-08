import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { theme } from 'constants/theme';

export const Btn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  z-index: 200;
  width: 32px;
  height: 32px;
  padding: 0;
`;

export const CloseIcon = styled(IoMdClose)`
  width: 100%;
  height: 100%;
  scale: 1;
  stroke: ${theme.colors.black};

  transition: stroke ${theme.transition}, scale ${theme.transition};

  &:hover,
  &:focus {
    stroke: ${theme.colors.grey};
    scale: 1.2;
  }
`;
