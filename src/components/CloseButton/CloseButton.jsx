import PropTypes from 'prop-types';
import { Btn, CloseIcon } from './CloseButton.styled';

export const CloseButton = ({ handleCloseModal }) => {
  return (
    <Btn type="button" onClick={handleCloseModal}>
      <CloseIcon />
    </Btn>
  );
};

CloseButton.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
