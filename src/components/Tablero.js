// @flow

import React from 'react';

import './Tablero.css';
import Ficha from './Ficha';

import type { Fichas, Id } from '../types/ficha';

export type Props = {
  fichas: Fichas,
  onFichaClick: (id: Id) => void
};

const Tablero = ({ fichas, onFichaClick }: Props) => (
  <div className="tablero">
    {fichas &&
      fichas.map(ficha => (
        <Ficha
          key={ficha.id}
          {...ficha}
          onClick={() => onFichaClick(ficha.id)}
        />
      ))}
  </div>
);

export default Tablero;
