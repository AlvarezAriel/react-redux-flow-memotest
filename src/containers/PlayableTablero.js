// @flow

import { connect } from 'react-redux';

import { selectFicha, resolveFichas } from '../actions/ficha';
import Tablero from '../components/Tablero';

import type { State, Dispatch } from '../types';

const mapStateToProps = (state: State) => {
  return {
    fichas: state.fichas
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onFichaClick: id => {
      setTimeout(() => {
        dispatch(resolveFichas());
      }, 2000);

      dispatch(selectFicha(id));
    }
  };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Tablero);
