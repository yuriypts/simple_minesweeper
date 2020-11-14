import React, { useState } from 'react';

import './box.scss';
import Square from '../square';
import { DIFFUCULT } from '../constants';
import { GET_ARRAY_BY_DIFFUCULT } from '../helper';

const Box = () => {
  const [difficult, setDifficult] = useState(DIFFUCULT.low);
  const [array, setArray] = useState(GET_ARRAY_BY_DIFFUCULT(difficult));
  const [gameOver, SetGameOver] = useState(false);
  
  const calculateArray = (array: Array<Array<{ number: number; index: number }>>, row: number, line: number) => {
    array[row][line].index = 1;
    array[row][line].number = 0;

    for (let [dx, dy] of [[0, 1], [1, 0], [0, -1], [-1, 0], [-1, -1], [-1, 1], [1, 1], [1, -1]]) {
      const nextRow = row + dx;
      const nextLine = line + dy;
      
      if (inArray(nextRow, nextLine) && array[nextRow][nextLine].index === 2) {
        ++array[row][line].number
      }
    }

    return array;
  }

  const inArray = (row: number, line: number) => {
    return 0 <= row && row < array.length && 0 <= line && line < array[0].length;
  }

  const handleClick = (row: number, line: number) => {
    const calculatedArray = calculateArray([...array], row, line);
    setArray(calculatedArray);
  }

  const handleDifficult = (difficultNumber: number) => {
    const newArray = GET_ARRAY_BY_DIFFUCULT(difficult);
    
    setArray(newArray);
    setDifficult(difficultNumber)
  }

  const handleGameOver = () => {
    setArray(GET_ARRAY_BY_DIFFUCULT(DIFFUCULT.low));
    setDifficult(DIFFUCULT.low);
    SetGameOver(false);
  }

  return (
    <div className="wrapper">
      <div className="gameOver">
        { gameOver && 
            <div>
              <div>Game Over</div>
              <input type="button" onClick={() => handleGameOver()} value="Let's try again" />
            </div>
        }
      </div>
      <div className="menu">
        <div>Difficulty</div>
        <input type="button" onClick={() => handleDifficult(DIFFUCULT.low)} value="Low" />
        <input type="button" onClick={() => handleDifficult(DIFFUCULT.medium)} value="Medium" />
        <input type="button" onClick={() => handleDifficult(DIFFUCULT.high)} value="High" />
      </div>
      <div className="box">
        {
          array.map((rowItem, row) => 
            rowItem.map((lineItem, line) => {
              const key = row + rowItem.length + line;
              return <Square handleClick={handleClick} item={lineItem} row={row} line={line} key={key} gameOver={() => SetGameOver(true)} />
            })
          )
        }
      </div>
    </div>
  );
}

export default Box;
