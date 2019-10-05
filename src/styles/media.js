import { css } from 'styled-components';

export const breakpoints = {
  desktop: 768,
};

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
