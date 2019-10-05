import React from 'react';
import { FaChartPie } from 'react-icons/fa';

import * as S from './styled';

export default function Header() {
  return (
    <S.Header>
      <S.HeaderTitle>
        <FaChartPie />
        Minhas Transações
      </S.HeaderTitle>
    </S.Header>
  );
}
