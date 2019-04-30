// @flow

import { connect } from 'react-redux';

import { selectFicha, resolveFichas } from '../actions/ficha';
import { countMove } from '../actions/move';
import Tablero from '../components/Tablero';

import type { State, Dispatch } from '../types';

const mapStateToProps = (state: State) => {
  return {
    fichas: state.fichas,
    fichasSeleccionadas: state.fichas.filter(ficha => ficha.spin === 'selected')
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onFichaClick: (id, seleccionadas) => {
      setTimeout(() => {
        dispatch(resolveFichas());
      }, 2000);

      if (seleccionadas.length === 1) {
        dispatch(countMove());
      }

      dispatch(selectFicha(id));
    }
  };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Tablero);
