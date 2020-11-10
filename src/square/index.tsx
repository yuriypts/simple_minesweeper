import React, { FC, useState } from 'react';
import classnames from 'classnames';

import './square.scss';

interface SquareProps {
  index: number;
}

const Square: FC<SquareProps> = ({ index }) => {
  const [color, setColor] = useState(false)

  const handleClick = () => {
    if (index === 11) {
      console.log('booooom')
    }

    setColor(true);
  }

  return (
    <div className={classnames('square', { 'silver': color })} onClick={handleClick}></div>
  );
}

export default Square;
