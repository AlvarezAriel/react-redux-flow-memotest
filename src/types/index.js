// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { FichasState, FichasAction } from './ficha';

export type ReduxInitAction = { type: '@@INIT' };

export type State = FichasState; // TODO: add more states here if needed using &

export type Action = ReduxInitAction | FichasAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
