import React, { FC } from 'react';

import './box.scss';
import Square from '../square';

const array = (): Array<number> => {
  const arr = Array<number>();

  for (let i = 0; i < 200; i++) {
    arr.push(i);
  }

  return arr;
}

const Box = () => {
  return (
    <div className="box">
      {
        array().map(item => <Square index={item} key={item} />)
      }
    </div>
  );
}

export default Box;
