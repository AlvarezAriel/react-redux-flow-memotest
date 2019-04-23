import fichas from './fichas';
import { selectFicha } from '../actions/ficha';

const fixtureFichasState = {
  fichas: [
    { id: 1, emoji: '👽', spin: 'down' },
    { id: 2, emoji: '👽', spin: 'down' },
    { id: 3, emoji: '👹', spin: 'down' },
    { id: 4, emoji: '👹', spin: 'down' }
  ]
};

describe('fichas reducer', () => {
  it('should handle initial state', () => {
    expect(fichas(undefined, { type: '@@INIT' })).toEqual([]);
  });

  it('should handle select action', () => {
    expect(fichas(fixtureFichasState.fichas, selectFicha(1))).toEqual([
      { id: 1, emoji: '👽', spin: 'selected' },
      { id: 2, emoji: '👽', spin: 'down' },
      { id: 3, emoji: '👹', spin: 'down' },
      { id: 4, emoji: '👹', spin: 'down' }
    ]);
  });
});
