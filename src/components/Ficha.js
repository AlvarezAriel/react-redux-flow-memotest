// @flow

import React from 'react';

import './Ficha.css';
import type { Emoji, Spin } from '../types/ficha';

export type Props = {
  onClick: () => void,
  spin: Spin,
  emoji: Emoji
};

const styleClassFromSpin = (spin: Spin): string => {
  switch (spin) {
    case 'down':
      return 'ficha bocaAbajo';
    case 'selected':
      return 'ficha selected';
    default:
      return 'ficha';
  }
};

const Ficha = ({ onClick, emoji, spin }: Props) => (
  <span className={styleClassFromSpin(spin)} onClick={onClick}>
    {spin === 'down' ? '' : emoji}
  </span>
);

export default Ficha;
