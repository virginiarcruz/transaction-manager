import styled from 'styled-components/macro';
import { blue, white } from '../../styles/colors';

export const Button = styled.button`
  background-color: ${blue};
  color: ${white};
  font-size: 1rem;
  font-weight: 500;
  border-radius: 22px;
  padding: 12px 40px;
  text-align: center;
  border: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 5px;
  }
`;
