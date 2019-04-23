// @flow

import React from 'react';

import './Ficha.css';
import type { Emoji, Spin } from '../types/ficha';

export type Props = {
  onClick: () => void,
  spin: Spin,
  emoji: Emoji
};

const Ficha = ({ onClick, emoji, spin }: Props) => (
  <span
    className={spin === 'down' ? 'ficha bocaAbajo' : 'ficha'}
    onClick={onClick}
  >
    {spin === 'down' ? '' : emoji}
  </span>
);

export default Ficha;
