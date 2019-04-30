// @flow

import { combineReducers } from 'redux';

import fichas from './fichas';
import movesReducer from './moves';

export default combineReducers({
  fichas: fichas,
  moves: movesReducer
});
