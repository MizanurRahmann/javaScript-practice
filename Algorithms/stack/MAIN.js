const Stack = require('./stack');

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.top());
console.log(s.pop());
console.log(s.pop());
console.log(s.top());