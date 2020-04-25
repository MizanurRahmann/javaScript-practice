const bubbleSort = require('./bubbleSort');

const arrOne = [87, 4, 9, 0, -34];
console.log('Given Array:', arrOne);
const sortedArrOne = bubbleSort(arrOne);
console.log('Sorted Array:', sortedArrOne);

const arrTwo = ['Bmw', 'Audi', 'Toyota', 'Ferrari', 'Lada'];
console.log('Given Array:', arrTwo);
const sortedArrTwo = bubbleSort(arrTwo);
console.log('Sorted Array:', sortedArrTwo);