import styled from 'styled-components/macro';

import {
  graySecondaryLight,
  white,
  blue,
  green,
  red,
  grayPrimaryLight,
} from '../../styles/colors';

export const TransactionList = styled.ul`
  list-style: none;
  > li {
    &:first-child {
      margin-bottom: 0;
      background-color: ${blue};
      color: ${white};
      font-weight: 600;
      text-transform: uppercase;
    }
    &.total {
      background-color: ${grayPrimaryLight};
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

export const TransactionListItem = styled.li`
  border-bottom: 1px solid ${graySecondaryLight};
  margin-bottom: 5px;
  line-height: 1.83;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${white};
  > p {
    width: calc(33.3% - 15px);
    padding: 10px;
    &.debito {
      color: ${red};
      font-weight: 600;
    }
    &.credito {
      color: ${green};
      font-weight: 600;
    }
  }
`;
