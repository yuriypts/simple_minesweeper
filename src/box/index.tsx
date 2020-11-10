import React, { FC } from 'react';

import './box.scss';
import Square from '../square';

const Box = () => {
  return (
    <div className="box">
      {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(item => <Square index={item} key={item} />)
      }
    </div>
  );
}

export default Box;
