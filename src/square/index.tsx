import React, { FC, useState } from 'react';
import classnames from 'classnames';

import './square.scss';

interface SquareProps {
  index: number;
}

const bombs = [5,10,50,80,120,150, 180];

const Square: FC<SquareProps> = ({ index }) => {
  const [color, setColor] = useState(false)
  const isbomb = bombs.includes(index);

  const handleClick = () => {
    if (isbomb) {
      console.log('booooom')
    }

    setColor(true);
  }

  return (
    <div className={classnames('square', { 'silver': color, 'red': isbomb })} onClick={handleClick}></div>
  );
}

export default Square;
