// Using Regex boundaries to fix buggy string.
buggyMultiline = `tey, ihe light-greon apple tangs on ihe greon traa`;

// 1) Use ^ to fix the matching at the begining of the string, and right after newline.
buggyMultiline = buggyMultiline.replace(/^t/gim,'h'); 
console.log(1, buggyMultiline); // fix 'tey', 'tangs' => 'hey', 'hangs'. Avoid 'traa'.

// 2) Use $ to fix matching at the end of the text.
buggyMultiline = buggyMultiline.replace(/aa$/gim,'ee.'); 
console.log(2, buggyMultiline); // fix  'traa' => 'tree'.

// 3) Use \b to match characters right on border between a word and a space.
buggyMultiline = buggyMultiline.replace(/\bi/gim,'t');
console.log(3, buggyMultiline); // fix  'ihe' but does not touch 'light'.

// 4) Use \B to match characters inside borders of an entity.
fixedMultiline = buggyMultiline.replace(/\Bo/gim,'e');
console.log(4, fixedMultiline); // fix  'greon' but does not touch 'on'.



let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

let fruitsStartsWithA = fruits.filter(fruit => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]

let fruitsStartsWithNotA = fruits.filter(fruit => /^[^A]/.test(fruit));
console.log(fruitsStartsWithNotA); // [ 'Watermelon', 'Orange', 'Strawberry' ]



let fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];
let enEdSelection = fruitsWithDescription.filter(descr => /(en|ed)\b/.test(descr));
console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]

