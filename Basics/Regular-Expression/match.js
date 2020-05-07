/*The match() method retrieves the result of matching a string against a regular expression.*/

const randomNumber = "015 354 8787 687351 3512 8735";
const regExpCoordinates2 = /\b\d{4}\b/g;
console.log(randomNumber.match(regExpCoordinates2)); //[ '8787', '3512', '8735' ]


let string_1 = 'For more information, see Chapter 3.4.5.1';
let re = /see (chapter \d+(\.\d)*)/i;
console.log(string_1.match(re) + ' ');

let string_2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let regexp = /[A-E]/gi;
console.log(string_2.match(regexp)); // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']


//USING NAMED CAPTURING GROUPS
let paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
let capturingRegex = /(?<animal>fox|cat) jumps over/;
found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}


//USING match() WITHOUT ANY PARAMETER
let str = "Nothing will come of nothing.";
str.match();   // returns [""]