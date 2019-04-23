import { selectFicha, turnDownFicha, resolveFichas } from './ficha';
import type { Id, FichasAction } from '../types/ficha';

describe('actions', () => {
  it('should create an action to select icha', () => {
    const id = 11;
    const expectedAction = {
      type: 'SELECT',
      id
    };

    expect(selectFicha(11)).toEqual(expectedAction);
  });
});
