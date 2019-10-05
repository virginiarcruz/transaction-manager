import styled from 'styled-components/macro';
import { grayLight, grayTexts } from '../../styles/colors';
import media from '../../styles/media';

export const Main = styled.main`
  color: ${grayTexts};
  min-width: 60%;
  max-width: 100%;
  background-color: ${grayLight};
  border-radius: 4px;
  padding: 20px;
  margin: 30px auto;
  height: 100%;
  ${media.desktop`
    padding: 50px;
    max-width: 80%;
    margin: 80px auto;
    height: auto;
  `}
`;
