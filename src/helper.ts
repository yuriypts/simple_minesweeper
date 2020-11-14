import { DIFFUCULT } from "./constants";

interface Box {
  number: number;
  index: number
}



const inArray = (array: Array<Array<Box>>, row: number, line: number) => 
  0 <= row && row < array.length && 0 <= line && line < array[0].length;

const COUNT = 5;

const renderRow = (counts: Array<number>): Array<Box> => {
  const arr = Array<Box>();

  for (let i = 0; i < COUNT; i++) {
    if (counts.includes(i)) {
      arr.push({ index: 2, number: 0 });
    } else {
      arr.push({ index: 0, number: 0 });
    }
  }

  return arr;
}

export const calculateArray = (array: Array<Array<Box>>, row: number, line: number) => {
  array[row][line].index = 1;
  array[row][line].number = 0;

  for (let [dx, dy] of [[0, 1], [1, 0], [0, -1], [-1, 0], [-1, -1], [-1, 1], [1, 1], [1, -1]]) {
    const nextRow = row + dx;
    const nextLine = line + dy;
    
    if (inArray(array, nextRow, nextLine) && array[nextRow][nextLine].index === 2) {
      ++array[row][line].number
    }
  }

  return array;
}

export const getArrayByDifficultyValue = (difficult: number): Array<Array<Box>> => {
  let counts = [-1]
  let array = Array<Array<Box>>();

  for (let i = 0; i < COUNT; i++) {
    switch(difficult) {
      case DIFFUCULT.low:
        counts = [
          Math.floor(Math.random() * Math.floor(COUNT + 1))
        ]
        break;
  
      case DIFFUCULT.medium:
        counts = [
          Math.floor(Math.random() * Math.floor(COUNT + 1)),
          Math.floor(Math.random() * Math.floor(COUNT + 1))
        ]
        break;
  
      case DIFFUCULT.high:
        counts = [
          Math.floor(Math.random() * Math.floor(COUNT + 1)),
          Math.floor(Math.random() * Math.floor(COUNT + 1)),
          Math.floor(Math.random() * Math.floor(COUNT + 1))
        ]
        break;
    }

    array.push(renderRow(counts));
  }
  
  return array;
}
