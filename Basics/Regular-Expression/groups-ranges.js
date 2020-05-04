/* (x), (?:x), x|y, [xyz], [^xyz], \Number */

var str = "re, green, red, green, gren, gr, blue, yellow";
var regxp1 = /(red|green)/g;
console.log('\n'+str.match(regxp1) + '');


var str2 = "There was a long silence after this, and Alice could only hear whispers now and then.";
var regexpVowels = /[aeiouy]/g;
console.log("Number of vowels:", str2.match(regexpVowels).length);

const str3 = "The Caterpillar and Alice looked at each other";
const regexpWithoutE = /\b[a-df-z]+\b/ig;
console.log(str3.match(regexpWithoutE)); //["and", "at"]


let quotedText = /'([^']*)'/;
console.log(quotedText.exec("She said 'hello'") + ''); //["'hello'", "hello"]


console.log(/(\d)+/.exec("123") +''); //['123', '3']


const imageDescription = "This image has a resolution of 1440×900 pixels.";
const regexpSize = /([0-9]+)×([0-9]+)/;
const match = imageDescription.match(regexpSize);
console.log(`Width: ${match[1]} / Height: ${match[2]}.`); //Width: 1440 / Height: 900.



const personList = `First_Name: John, Last_Name: Doe`;

const regExpNames_1 = /First_Name: (\w+), Last_Name: (\w+)/mg;
const regExpNames_2 = /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/mg;

let match_1 = regExpNames_1.exec(personList);
let match_2 = regExpNames_2.exec(personList);

console.log(`Hello ${match_1[1]} ${match_1[2]}`);
console.log(`Hello ${match_2.groups.firstname} ${match_2.groups.lastname} \n`);
