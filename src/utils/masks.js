/* eslint-disable */

function unmask(mask) {
  return mask.replace(/(\.)?(-)?([/])?/g, '');
}

const masks = {
 
  currency: {
    mask(value) {
      if (value === '') {
        return value;
      }
      return parseFloat(value)
        .toFixed(2)
        .replace('.', ',')
        .replace(/\d(?=(\d{3})+,)/g, '$&.');
    },
    unmask(mask) {
      return mask.replace(/\D/g, '');
    },
  },
  currencyInput: {
    mask(value) {
      value = `${value}`.replace(/\R\$/g, '');
      value = value
        .replace(',', '')
        .split('.')
        .join('');
      return value === '' ? '' : `R$ ${masks.currency.mask(value / 100)}`;
    },
    unmask(mask) {
      return mask.replace(/\D/g, '');
    },
  },
  none: {
    mask(text) {
      return text;
    },
    unmask(text) {
      return text;
    },
  },
};

export default masks;
