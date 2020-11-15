import { DIFFUCULT } from "./constants";

interface Box {
  number: number;
  index: number
}

const inArray = (array: Array<Array<Box>>, row: number, line: number) => 
  0 <= row && row < array.length && 0 <= line && line < array[0].length;

const COUNT = 5;

const renderRow = (counts: Array<number>, difficult: number): Array<Box> => {
  const arr = Array<Box>();

  for (let i = 0; i < COUNT * difficult; i++) {
    if (counts.includes(i)) {
      arr.push({ index: 2, number: 0 });
    } else {
      arr.push({ index: 0, number: 0 });
    }
  }

  return arr;
}

export const calculateArray = (array: Array<Array<Box>>, row: number, line: number, testArray?: Array<Array<Box>>) : Array<Array<Box>> => {
  array[row][line].number = 0;
  array[row][line].index = 1;

  for (let [x, y] of [[0, 1], [1, 0], [0, -1], [-1, 0], [-1, -1], [-1, 1], [1, 1], [1, -1]]) {
    const nextRow = row + x;
    const nextLine = line + y;
    
    if (inArray(array, nextRow, nextLine)) {
      if (array[nextRow][nextLine].index === 2) {
        ++array[row][line].number
      }

      if (testArray) {
        if (array[nextRow][nextLine].index === 0 && testArray[nextRow][nextLine].number === 0 && testArray[nextRow][nextLine].index !== 2) {
          calculateArray(array, nextRow, nextLine, testArray)
        }
      } else {
        if (array[nextRow][nextLine].index === 0) {
          calculateArray(array, nextRow, nextLine)
        }
      }
    }
  }

  return array;
}

export const getArrayByDifficultyValue = (difficult: number): Array<Array<Box>> => {
  let counts = [-1]
  let array = Array<Array<Box>>();
  const caulculatedCount = COUNT * difficult;

  for (let i = 0; i < caulculatedCount; i++) {
    switch(difficult) {
      case DIFFUCULT.low:
        counts = [
          Math.floor(Math.random() * Math.floor(caulculatedCount + 1))
        ]
        break;
  
      case DIFFUCULT.medium:
        counts = [
          Math.floor(Math.random() * Math.floor(caulculatedCount + 1)),
          Math.floor(Math.random() * Math.floor(caulculatedCount + 1))
        ]
        break;
  
      case DIFFUCULT.high:
        counts = [
          Math.floor(Math.random() * Math.floor(caulculatedCount + 1)),
          Math.floor(Math.random() * Math.floor(caulculatedCount + 1)),
          Math.floor(Math.random() * Math.floor(caulculatedCount + 1))
        ]
        break;
    }

    array.push(renderRow(counts, difficult));
  }
  
  return array;
}
