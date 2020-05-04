/* *, +, ?, x{n}, x{n,}, x{n,m} */

const str = "Hellooo World! Hello";
console.log(str.match(/lo*/g));
console.log(str.match(/lo+/g));
console.log(str.match(/lo{2}/g));


//COUNTING CHARACTERS
const singleLetterWord = /\b\w\b/g;
const notSoLongWord = /\b\w{1,6}\b/g;
const loooongWord = /\b\w{13,}\b/g;
const sentence = "Why do I have to learn multiplication table?";
console.log(sentence.match(singleLetterWord)); // ["I"]
console.log(sentence.match(notSoLongWord));    // [ "Why", "do", "I", "have", "to", "learn", "table" ]
console.log(sentence.match(loooongWord));      // ["multiplication"]


//OPTIONAL
const britishText = "He asked his neighbour a favour.";
const americanText = "He asked his neighbor a favor.";
const regexpEnding = /\w+ou?r/g; 
console.table(britishText.match(regexpEnding)); //["neighbour", "favour"]
console.table(americanText.match(regexpEnding)); // ["neighbor", "favor"]


//GREEDY AND NON-GREEDY
const text = "I must be getting somewhere near the centre of the earth.";
const greedyRegexp = /[\w ]+/;
const nonGreedyRegexp = /[\w ]+?/;
console.log(text.match(greedyRegexp)[0] + ''); // "I must be getting somewhere near the centre of the earth"
console.log(text.match(nonGreedyRegexp) + ''); // "I"