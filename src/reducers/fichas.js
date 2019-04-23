// @flow

import type { Fichas, Id, Spin } from '../types/ficha';
import type { Action } from '../types';

const selectFicha = (fichas: Fichas, id: Id): Fichas => {
  let selectedCount = fichas.filter(f => f.spin === 'selected').length;
  if (selectedCount < 2) {
    return fichas.map(t => (t.id !== id ? t : { ...t, spin: 'selected' }));
  }

  return fichas;
};

const changeSelectedSpin = (fichas: Fichas, spin: Spin): Fichas =>
  fichas.map(f => (f.spin === 'selected' ? { ...f, spin } : f));

const resolveFichas = (fichas: Fichas): Fichas => {
  let selectedFichas = fichas.filter(f => f.spin === 'selected');
  if (selectedFichas.length === 2) {
    let pairsDoMatch = selectedFichas[0].emoji === selectedFichas[1].emoji;
    return changeSelectedSpin(fichas, pairsDoMatch ? 'up' : 'down');
  }

  return fichas;
};

const fichas = (state: Fichas = [], action: Action): Fichas => {
  switch (action.type) {
    case 'SELECT':
      return selectFicha(state, action.id);

    case 'RESOLVE_FICHAS':
      return resolveFichas(state);

    default:
      return state;
  }
};

export default fichas;
