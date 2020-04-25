const mergeSort = require('./mergeSort');

// Example One
const arrOne = [88, 1, 20, -30];
const sortedArrOne = mergeSort(arrOne);
console.log('The Array:', arrOne);
console.log('Sorted Array:', sortedArrOne);

// Example two
const arrTwo = [33, 10, 13, 2, -23, -1, 40, -12, -35, -21, 145, 654];
const sortedArrTwo = mergeSort(arrTwo);
console.log('The Array:', arrTwo);
console.log('Sorted Array:', sortedArrTwo);

// Example three
const arrThree = ['Bmw', 'Audi', 'Toyota', 'Ferrari', 'Lada'];
const sortedArrThree = mergeSort(arrThree);
console.log('The Array:', arrThree);
console.log('Sorted Array:', sortedArrThree);