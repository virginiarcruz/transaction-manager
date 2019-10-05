import React from 'react';

import * as S from './styled';

const TransactionType = ({
  type,
  value,
  onChange,
  transactionType,
  defaultChecked,
}) => {
  return (
    <S.Label htmlFor="DEB">
      <S.Input
        type={type}
        name="transaction"
        id={value}
        value={value}
        onChange={onChange}
        defaultChecked={!!defaultChecked}
      />
      {transactionType}
    </S.Label>
  );
};

export default TransactionType;
