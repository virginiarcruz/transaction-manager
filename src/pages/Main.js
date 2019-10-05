import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import * as S from './styled';

import Header from '../components/Header';
import PageContent from '../components/PageContent';
import Button from '../components/Button';
import Description from '../components/Description';
import FormItem from '../components/FormItem';
import TransactionType from '../components/TransactionType';
import TitleSection from '../components/TitleSection';
import TransactionList from '../components/TransactionList';

import masks from '../utils/masks';
import { emptyIfNull } from '../utils/emptyIfNull';
import useAddTransaction from '../hooks/useAddTransaction';

const Main = () => {
  const [transaction, setTransaction] = useState({ value: 'DEB' });
  const tipo = transaction.value === 'DEB' ? 'Débito' : 'Crédito';

  const { inputs, handleInputChange } = useAddTransaction();

  const [items, setNewItems] = useState('');

  const clearInputs = () => {
    inputs.descricao = '';
    inputs.valor = '';
  };

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    setNewItems([
      ...items,
      {
        descricao: inputs.descricao,
        tipo,
        valor: masks.currencyInput.mask(inputs.valor),
      },
    ]);
    clearInputs();
  };

  const newValue = inputs.valor && masks.currencyInput.mask(inputs.valor);

  const getAllValues =
    items &&
    items.map(value => {
      const allValues = value.valor.replace('R$', '').trim();
      return parseFloat(allValues.replace(/\./g, '').replace(',', '.'));
    });

  const sumAllValues = getAllValues && getAllValues.reduce((v, i) => v + i);

  useEffect(() => {
    const storageItems = localStorage.getItem('items');

    if (storageItems) {
      setNewItems(JSON.parse(storageItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const debito = () => {
    if (tipo === 'Débito') {
      const onlyDebits = items;
      if (onlyDebits) {
        onlyDebits.map(debit => {
          const valueDebit = debit.valor.replace('R$', '').trim();
          return parseFloat(valueDebit.replace(/\./g, '').replace(',', '.'));
        });
      }
    }
  };
  console.log('funcao', debito());

  return (
    <>
      <PageContent>
        <Header />
        <Description />

        <S.Form onSubmit={handleSubmit}>
          <S.Fieldset>
            <TransactionType
              type="radio"
              value="DEB"
              onChange={e => setTransaction({ value: e.target.value })}
              transactionType="Débito"
              defaultChecked
            />
            <TransactionType
              type="radio"
              value="CRE"
              onChange={e => setTransaction({ value: e.target.value })}
              transactionType="Crédito"
            />
          </S.Fieldset>

          <S.Fieldset>
            <FormItem
              name="descricao"
              labelContent="Descrição"
              placeholder="Adicone uma descrição"
              onChange={handleInputChange}
              value={emptyIfNull(inputs.descricao)}
              required
              type="text"
            />
            {transaction.value === 'DEB' ? (
              <FormItem
                name="valor"
                labelContent="Valor do Débito"
                className="transDebito"
                onChange={handleInputChange}
                value={emptyIfNull(newValue)}
                type="text"
                minlength="4"
                required
              />
            ) : (
              <FormItem
                name="valor"
                labelContent="Valor do Crédito"
                className="transCredito"
                onChange={handleInputChange}
                value={emptyIfNull(newValue)}
                type="text"
                required
              />
            )}
          </S.Fieldset>
          <Button type="submit">
            <FaPlus />
            Adicionar
          </Button>
        </S.Form>

        <S.Section>
          <TitleSection title="Todas as transações" />

          <TransactionList items={items} total={sumAllValues} />
        </S.Section>
      </PageContent>
    </>
  );
};
export default Main;
