/* ^ $  x(?=y) x(?!y) (?=>y)x (?<!y)x */
const str = 'A quick fox';

const lastWord = /\w+$/;
console.log(str.match(lastWord) + '\n');

const allWord = /\b\w+\b/g;
console.log(str.match(allWord) + '\n');

const lookAhead = /\w+(?= fox)/;
console.log(str.match(lookAhead) + '\n');

const negativeLookAhead = /\d+(?!\.)/;
console.log("3.1416".match(negativeLookAhead) + '\n');

const lookBehind = /(?<= quick)\s\w+/;
console.log(str.match(lookBehind) + '\n');

const negativeLookBehind = /(?<!-)\d+/;
console.log(negativeLookBehind.exec(3) + '\n');
