// @flow
import type { MoveCounter } from '../types/ficha';
import type { Action } from '../types';

const moves = (state: MoveCounter = 0, action: Action): MoveCounter => {
  switch (action.type) {
    case 'CONTAR':
      return state + 1;

    default:
      return state;
  }
};

export default moves;
