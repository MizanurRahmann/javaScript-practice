/*Map is a collection of elements where each element is stored as a Key, value pair.

A Map does not contain any keys by default. It only contains what is explicitly put into it.
But, An Object has a prototype, so it contains default keys that could collide with your own 
keys if you're not careful.*/

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages.get("Julia")}`); //Julia is 62
console.log("Is Jack's age known?", ages.has("Jack")); //false
console.log(ages.has("toString")); //false

ages.set({firstname: "Mizanur", lastname: "Rahman"}, 19);

var key_iterators = ages.keys();
console.log(key_iterators.next().value); //Boris
console.log(key_iterators.next().value); //Liang
console.log(key_iterators.next().value); //Julia
console.log(key_iterators.next().value); //{ firstname: "Mizanur", lastname: "Rahman" }

var value_iterators = ages.values();
console.log(value_iterators.next().value); //39
console.log(value_iterators.next().value); //22

var entry_iterators = age.entries();
console.log(value_iterators.next().value); //["Boris", 39]
console.log(value_iterators.next().value); //["Liang", 22]

var iterators = ages[Symbol.iterator]();
for (let item of iterators) {
    console.log(item);
  }
//["Boris", 39]
//["Liang", 22]
//["Julia", 62]
//[{firstname: "Mizanur", lastname: "Rahman"}, 19]

ages.clear();
console.log(ages.size); //0

