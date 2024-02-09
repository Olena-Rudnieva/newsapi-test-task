import { PiPushPinLight, PiPushPinFill } from 'react-icons/pi';
import styled from 'styled-components';
import { theme } from 'constants/theme';

export const Pin = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const IconEmpty = styled(PiPushPinLight)`
  width: 100%;
  height: 100%;
  fill: ${theme.colors.black};
  transition: transform ${theme.transition};

  &:hover {
    transform: scale(1.1);
  }
`;

export const IconFilled = styled(PiPushPinFill)`
  width: 100%;
  height: 100%;
  fill: ${theme.colors.black};
  transition: transform ${theme.transition};

  &:hover {
    transform: scale(1.1);
  }
`;
