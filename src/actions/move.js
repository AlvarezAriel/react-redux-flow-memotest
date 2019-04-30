// @flow

import type { MovesAction } from '../types/ficha';

export const countMove = (): MovesAction => {
  return {
    type: 'CONTAR'
  };
};
