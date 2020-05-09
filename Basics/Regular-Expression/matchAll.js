/*The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.*/


//Regexp.exec() and matchAll()
const regexp = RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
let match;
while ((match = regexp.exec(str)) !== null) {
  console.log(`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`);
}

const matches = str.matchAll(regexp);
for (const m of matches) {
  console.log(`Found ${m[0]} start=${m.index} end=${m.index + m[0].length}.`);
}
const array = Array.from(str.matchAll(regexp), m => m[0]);
console.log(array);


//matchAll internally makes a clone of the regexp—so, unlike regexp.exec(), lastIndex does not change as the string is scanned.
const regExp = RegExp('[a-c]', 'g');
regExp.lastIndex = 1;;
const _str = 'vxabcde';
const _array = Array.from(_str.matchAll(regExp), m => `${regExp.lastIndex}${m[0]}`);
console.log(_array);


const regExp2 = /t(e)(st(\d?))/g;
const _str2 = 'test1test2';
const _array2 = [..._str2.matchAll(regExp2)];
console.log(_array2[0]);
console.log(_array2[1]);