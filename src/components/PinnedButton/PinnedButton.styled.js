import { BsPinAngle } from 'react-icons/bs';
import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Pin = styled.button`
  position: absolute;
  top: 20px;
  right: 40px;
  border: none;
  background: transparent;
  width: 32px;
  height: 32px;
  padding: 0;
`;

export const IconEmpty = styled.svg`
  width: 100%;
  height: 100%;
  stroke: ${theme.colors.black};
  fill: transparent;
  transition: transform ${theme.transition};

  &:hover {
    transform: scale(1.05);
  }
`;

export const IconFilled = styled.svg`
  width: 100%;
  height: 100%;
  fill: ${theme.colors.black};
  stroke: ${theme.colors.black};
`;

export const PinnedIcon = styled(BsPinAngle)`
  width: 28px;
  height: 28px;
  /* fill: ${theme.colors.black};
  stroke: white;

  transition: scale ${theme.transition};

  &:hover,
  &:focus {
    scale: 1.2;
  } */
`;
