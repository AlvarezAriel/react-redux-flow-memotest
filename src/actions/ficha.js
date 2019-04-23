// @flow

import type { Id, FichasAction } from '../types/ficha';

export const selectFicha = (id: Id): FichasAction => {
  return {
    type: 'SELECT',
    id
  };
};

export const resolveFichas = (): FichasAction => {
  return {
    type: 'RESOLVE_FICHAS'
  };
};
