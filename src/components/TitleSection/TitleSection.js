import React from 'react';

import * as S from './styled';

const TitleSection = ({ title, className }) => (
  <S.Title className={className}>{title}</S.Title>
);

export default TitleSection;
