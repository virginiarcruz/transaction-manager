import React from 'react';
import * as S from './styled';

const FormItem = ({
  labelContent,
  placeholder,
  value,
  invalid,
  onChange,
  name,
  type,
  className,
}) => {
  return (
    <>
      <S.LabelInput>{labelContent}</S.LabelInput>
      <S.InputWrapper
        placeholder={placeholder}
        value={value}
        name={name}
        className={className}
        onChange={onChange}
        invalid={invalid}
        type={type}
      />
    </>
  );
};

export default FormItem;
