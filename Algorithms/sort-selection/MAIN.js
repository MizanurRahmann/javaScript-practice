const selectionSort = require('./SelectionSort');

const GivenArray = [44, 67, 12, 23, 19, 99];
console.log('Given Array: ', GivenArray);

const SortedArrray = SelectionSort(GivenArray);
console.log('Sorted Array: ', SortedArrray);


const anotherArray = ['Bmw', 'Audi', 'Toyota', 'Ferrari', 'Lada'];
console.log('Given Array:', anotherArray);
const AnotherSortedArrray = SelectionSort(anotherArray);
console.log('Sorted Array:', AnotherSortedArrray);