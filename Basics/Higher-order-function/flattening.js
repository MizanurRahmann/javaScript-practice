//Sample Input: [[1, 2, 3], [4, 5], [6]]
//Sample output: [1, 2, 3, 4, 5, 6]

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((flat, current) => flat.concat(current), []));