/* \. . \cX \d \D \w \W \s \S \f \n \r \t \v \O \xhh \uhhhh \uhhhhh [\b] */

const str = "+7(903)-123-45-67";
console.log(str.match(/\d/)); //7
console.log(str.match(/\d/g).join('')); //79031234567
console.log(str.match(/\D/g)); //[ '+', '(', ')', '-', '-', '-' ]
console.log(str.replace(/\D/g, '')); //79031234567
console.log("\n");


console.log("HoroGoro-4".match(/HoroGoro.4/)); // HoroGoro-4
console.log("HoroGoro 4".match(/HoroGoro.4/)); // HoroGoro 4
console.log("HoroGoroE4".match(/HoroGoro.4/)); // HoroGoroE4
console.log( "HoroGor4".match(/HoroGoro.4/) ); // null
console.log("\n");


const dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/g;
console.log(dateTime.test("05-02-2020 15:20")); //true
console.log(dateTime.test("30-may-2020 15:20")); //false
console.log("\n");


const dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime2.test("1-30-2003 8:45")) //true
console.log("\n");


const chessStory = "He played the king in a8 and she moved her Queen in c2";
const regExpCoordinates = /\w\d/g;
console.log(chessStory.match(regExpCoordinates)); //[ 'a8', 'c2' ]
console.log("\n");

const randomNumber = "015 354 8787 687351 3512 8735";
const regExpCoordinates2 = /\b\d{4}\b/g;
console.log(randomNumber.match(regExpCoordinates2)); //[ '8787', '3512', '8735' ]
console.log("\n");

var aliceExcerpt = "I’m sure I’m not Ada,’ she said, ‘for her hair goes in such long ringlets, and mine doesn’t go in ringlets at all.";
var regexpWordStartingWithA = /\b[aA]\w+/g; // [aA] indicates the letter a or A
console.table(aliceExcerpt.match(regexpWordStartingWithA)); // ['Ada', 'and', 'at', 'all']
console.log("\n");