const fruits = [];
fruits.push("banana", "apple", "mango");
console.log(fruits.length); //3

fruits[5] = "mango";
console.log(fruits[5]); //mango
console.log(Object.keys(fruits)); //['0', '1', '2', '5']
console.log(fruits.length) //6

fruits.length = 10;
console.log(Object.keys(fruits)); //['0', '1', '2', '5']
console.log(fruits.length) //10

fruits.length = 2;
console.log(Object.keys(fruits)); //['0', '1']
console.log(fruits.length) //2

let msgArray = [];
msgArray[0] = "Hello";
msgArray[99] = "world";
console.log(msgArray.length) //100