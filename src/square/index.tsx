import React, { FC, useState } from 'react';
import classnames from 'classnames';

import './square.scss';

interface SquareProps {
  handleClick: (val: number, row: number) => void;
  index: number;
  row: number;
  line: number
}

const Square: FC<SquareProps> = ({ index, row, line, handleClick }) => {
  const click = () => {
    if (index === 1) {
      handleClick(row, line)
    }
  }

  return (
    <div className={classnames('square', { 'silver': index })} onClick={click}></div>
  );
}

export default Square;
