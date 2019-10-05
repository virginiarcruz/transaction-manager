import styled from 'styled-components/macro';
import { green } from '../../styles/colors';
import media from '../../styles/media';

export const Header = styled.header`
  width: 100%;
  padding: 2rem 0;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.85rem;
  font-weight: 600;
  text-align: center;
  color: ${green};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${media.desktop`
    font-size: 2rem;
  `}

  svg {
    margin-right: 10px;
  }
`;
