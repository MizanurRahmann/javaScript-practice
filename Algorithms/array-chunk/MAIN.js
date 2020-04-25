const arrayChunk = require('./arrayChunk');

//Arrays
const arr_1 = [1, 2 , 3, 4];
const arr_2 = [1, 2 , 3, 4, 5];


// arrayChunk1
console.log(arr_1+' is chunked by 2: '+arrayChunk(arr_1, 2));
console.log(arr_2+ ' is chunked by 4: '+arrayChunk(arr_2, 4));
