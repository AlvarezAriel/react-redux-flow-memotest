// @flow

import React from 'react';

import './Tablero.css';
import Ficha from './Ficha';

import type { Fichas, Id } from '../types/ficha';

export type Props = {
  fichas: Fichas,
  fichasSeleccionadas: Fichas,
  onFichaClick: (id: Id, seleccionadas: Fichas) => void
};

const Tablero = ({ fichas, fichasSeleccionadas, onFichaClick }: Props) => (
  <div className="tablero">
    {fichas.map(ficha => (
      <Ficha
        key={ficha.id}
        {...ficha}
        onClick={() => onFichaClick(ficha.id, fichasSeleccionadas)}
      />
    ))}
  </div>
);

export default Tablero;
