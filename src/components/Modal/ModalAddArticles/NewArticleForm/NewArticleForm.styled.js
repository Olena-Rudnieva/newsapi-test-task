import { theme } from 'constants/theme';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 18px;
  max-width: 438px;
  position: relative;
  width: 100%;

  label {
    font-size: 16px;
    color: ${theme.colors.black};
    font-weight: 400;
    line-height: 1.375;
  }

  input {
    width: 100%;
    padding: 16px 18px;
    font-size: 16px;
    color: ${theme.colors.black};
    font-weight: 400;
    line-height: 1.375;
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: ${theme.colors.grey};
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: inline-block;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.142;
  margin-top: 4px;
`;
