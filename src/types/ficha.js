// @flow

export type Id = number;
export type Emoji = string;
export type Spin = 'selected' | 'up' | 'down';

export type Ficha = {
  +id: Id,
  +emoji: Emoji,
  +spin: Spin
};

export type Fichas = Array<Ficha>;

export type FichasState = {
  +fichas: Fichas
};

export type FichasAction =
  | { type: 'SELECT', +id: Id }
  | { type: 'RESOLVE_FICHAS' };
