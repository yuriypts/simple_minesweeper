import React, { FC } from 'react';
import classnames from 'classnames';

import './square.scss';

interface SquareProps {
  handleClick: (val: number, row: number) => void;
  gameOver: () => void;
  item: { number: number; index: number };
  row: number;
  line: number
}

const Square: FC<SquareProps> = ({ item, row, line, handleClick, gameOver }) => {
  const click = () => {
    if (item.index === 2) {
      return gameOver();
    }

    handleClick(row, line)
  }

  return (
    <div className={classnames('square', { 'silver': item.index === 1 })} onClick={click}>{ item.number }</div>
  );
}

export default Square;
