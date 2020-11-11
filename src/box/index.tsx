import React, { FC, useState } from 'react';

import './box.scss';
import Square from '../square';

const renderRow = (): Array<number> => {
  const arr = Array<number>();

  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * Math.floor(2)));
  }

  return arr;
}

const array = [
  renderRow(),
  renderRow(),
  renderRow(),
  renderRow(),
  renderRow()
];

const Box = () => {
  const [version, setVersion] = useState(0);


  const dfs = (array: Array<Array<number>>, i: number, j: number) => {
    array[i][j] = 0;

    for (let [dx, dy] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
      const nextX = j + dx;
      const nextY = i + dy;
      
      if (withinGrid(array.length, array[0].length, nextX, nextY) && array[nextY][nextX] === 1) {
        dfs(array, nextY, nextX);
      }
    }
  }

  const withinGrid = (h: number, w: number, x: number, y: number) => {
    return 0 <= x && x < w && 0 <= y && y < h;
  }

  const handleClick = (val: number, row: number) => {
      dfs(array, val, row);
      setVersion(version + 1);
  }

  return (
    <div className="box">
      {
        array.map((row, i) => 
          row.map((item, j) => {
            const key = i + row.length + j;
            return <Square handleClick={handleClick} index={item} row={i} line={j} key={key} />
          })
        )
      }
    </div>
  );
}

export default Box;
