import React, { useState } from 'react';

import './box.scss';
import Square from '../square';
import { DIFFUCULT } from '../constants';
import { getArrayByDifficultyValue, calculateArray } from '../helper';

const Box = () => {
  const [difficult, setDifficult] = useState(DIFFUCULT.low);
  const [array, setArray] = useState(getArrayByDifficultyValue(difficult));
  const [gameOver, SetGameOver] = useState(false);
  
  const handleClick = (row: number, line: number) => {
    const calculatedArray = calculateArray([...array], row, line);
    setArray(calculatedArray);
  }

  const handleDifficult = (difficultNumber: number) => {
    const newArray = getArrayByDifficultyValue(difficult);
    
    setArray(newArray);
    setDifficult(difficultNumber)
  }

  const handleGameOver = () => {
    setArray(getArrayByDifficultyValue(DIFFUCULT.low));
    setDifficult(DIFFUCULT.low);
    SetGameOver(false);
  }

  return (
    <div className="wrapper">
      <div className="game-over">
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
