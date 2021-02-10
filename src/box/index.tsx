import React, { useState } from 'react';
import classNames from 'classnames';

import './box.scss';
import Square from '../square';
import { DIFFUCULT } from '../constants';
import { getArrayByDifficultyValue, calculateArray } from '../helper';

const Box = () => {
  const [difficult, setDifficult] = useState(DIFFUCULT.low);
  const [array, setArray] = useState(getArrayByDifficultyValue(difficult));
  const [calculatedArray, setCalculatedArray] = useState(calculateArray(JSON.parse(JSON.stringify(array)), 0, 0, undefined, true));
  const [gameOver, SetGameOver] = useState(false);

  const handleClick = (row: number, line: number) => {
    if (gameOver) {
      return false
    }

    const newArray = calculateArray([...array], row, line, calculatedArray);
    setArray(newArray);
  }

  const handleDifficult = (difficultNumber: number) => {
    if (gameOver) {
      return false
    }

    setNewArray(difficultNumber);
    setDifficult(difficultNumber);
  }

  const handleGameOver = () => {
    setNewArray(difficult);
    SetGameOver(false);
  }

  const setNewArray = (difficultNumber: number) => {
    const newArray = getArrayByDifficultyValue(difficultNumber);
    
    setArray(newArray);
    setCalculatedArray(calculateArray(JSON.parse(JSON.stringify(newArray)), 0, 0, undefined, true));
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
      <div className={classNames('box', { [`box_${difficult}`]: true })}>
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
