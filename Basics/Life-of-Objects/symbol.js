/*The data type symbol is a primitive data type. The Symbol() function returns a value of type
symbol, has static properties that expose several members of built-in objects,and many more things*/

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString()); // 1,2
console.log([1, 2][toStringSymbol]()); // 2 cm of blue yarn


/*It is possible to include symbol properties in object expressions and classes
by using square brackets around the property name.*/
let stringObject = {
    [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]()); // a jute rope