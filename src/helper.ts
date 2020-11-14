import { DIFFUCULT } from "./constants";

interface Box {
  number: number;
  index: number
}

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

export const GET_ARRAY_BY_DIFFUCULT = (difficult: number): Array<Array<Box>> => {
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
