// @flow

import { connect } from 'react-redux';

import { selectFicha, resolveFichas } from '../actions/ficha';
import { countMove } from '../actions/move';
import Tablero from '../components/Tablero';

import type { State, Dispatch } from '../types';

const mapStateToProps = (state: State) => {
  return {
    fichas: state.fichas
  };
};

// NOTE: esto técnicamente es un action creator. Lo dejo en este archivo (en lugar de moverlo a actions)
// para que sea más sencillo de seguir en este ejemplo.
const doActionsOnSelection = id => {
  // En lugar de retornar un data object, retornamos una función que luego será ejecutada por redux-thunk.
  // Esta indirección nos permite escribir el efecto de lado en la definición de los action creators,
  // quedando encapsulado en la ejecución del middleware (lejos del componente y del reducer).
  return (dispatch, getState) => {
    console.log('Thunk eecuted');

    // NOTE: es conveniente no abusar de getState. En una aplicación más grande tiene sentido
    // extraer esto en un "selector", que es básicamente una función que toma un State y deriva
    // la información que nos interese.
    const selectedCount = getState().fichas.filter(
      ficha => ficha.spin === 'selected'
    ).length;

    if (selectedCount === 1) {
      setTimeout(() => {
        dispatch(resolveFichas());
      }, 2000);
      dispatch(countMove());
    }

    dispatch(selectFicha(id));
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onFichaClick: id => dispatch(doActionsOnSelection(id))
  };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Tablero);
