import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';

export const Button = ({ type, text, handleClick }) => {
  return (
    <ButtonStyle type={type} onClick={handleClick}>
      {text}
    </ButtonStyle>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
