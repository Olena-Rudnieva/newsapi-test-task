import { Btn, CloseIcon } from './CloseButton.styled';

export const CloseButton = ({ handleCloseModal }) => {
  return (
    <Btn type="button" onClick={handleCloseModal}>
      <CloseIcon />
    </Btn>
  );
};
