import styled from 'styled-components/macro';

import { grayPrimaryLight } from '../styles/colors';

export const Form = styled.form``;
export const Fieldset = styled.fieldset`
  margin: 20px 0;
  > label {
    &:first-child {
      margin-right: 20px;
    }
  }
`;

export const Section = styled.section`
  margin: 30px auto;
  border-top: 1px solid ${grayPrimaryLight};
  padding-top: 30px;
`;
