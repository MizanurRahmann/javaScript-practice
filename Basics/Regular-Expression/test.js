/*The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.*/


console.log(/abc/.test("abcde")); //true
console.log(/abc/.test("abxde")); //false

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20")); // true
console.log(dateTime.test("30-jan-2003 15:20")); //false


console.log(/'\d+'/.test("'123'")); //true
console.log(/'\d+'/.test("''")); //false
console.log(/'\d*'/.test("'123'")); //true
console.log(/'\d*'/.test("''")); //true


const regex = /foo/g; // the "global" flag is set
// regex.lastIndex is at 0
regex.test('foo')     // true
// regex.lastIndex is now at 3
regex.test('foo')     // false
// regex.lastIndex is at 0
regex.test('barfoo')  // true
// regex.lastIndex is at 6
regex.test('foobar')  //false
// regex.lastIndex is at 0
// (...and so on)