import React from 'react';

import * as S from './styled';

const TransactionList = ({ items, total }) => (
  <S.TransactionList>
    <S.TransactionListItem>
      <p>Descrição</p>
      <p>Tipo</p>
      <p>Valor</p>
    </S.TransactionListItem>

    {items &&
      items.map((item, index) => (
        <S.TransactionListItem key={index}>
          <p>{item.descricao}</p>
          <p>{item.tipo}</p>
          <p className={item.tipo === 'Débito' ? 'debito' : 'credito'}>
            {item.valor}
          </p>
        </S.TransactionListItem>
      ))}
    {items && (
      <S.TransactionListItem className="total">
        <p>Total</p>
        <p />
        <p>R$ {total}</p>
      </S.TransactionListItem>
    )}
  </S.TransactionList>
);

export default TransactionList;
