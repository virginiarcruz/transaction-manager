import styled from 'styled-components/macro';
import { green, red, white, graySecondaryLight } from '../../styles/colors';

export const LabelInput = styled.label`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.input`
  padding: 15px 15px;
  font-size: 1rem;
  font-weight: 400;
  margin: 10px 0;
  width: 100%;
  background-color: ${white};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid ${graySecondaryLight};

  display: flex;
  flex-direction: column;
  &.transDebito {
    color: ${red};
  }
  &.transCredito {
    color: ${green};
  }
`;
