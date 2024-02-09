import styled from 'styled-components';
import { MdDeleteForever } from 'react-icons/md';
import { theme } from 'constants/theme';

export const DeleteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  border-radius: 50%;
  background: transparent;
`;

export const DeleteIcon = styled(MdDeleteForever)`
  width: 28px;
  height: 28px;
  fill: ${theme.colors.black};
  stroke: white;

  transition: scale ${theme.transition};

  &:hover,
  &:focus {
    scale: 1.2;
  }
`;
