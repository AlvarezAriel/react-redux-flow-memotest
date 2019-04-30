// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { GameState, FichasAction, MovesAction } from './ficha';

export type ReduxInitAction = { type: '@@INIT' };

export type State = GameState; // TODO: add more states here if needed using &

export type Action = ReduxInitAction | FichasAction | MovesAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
