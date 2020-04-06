/*Static methods are called without instantiating their class and cannot be called through
a class instance*/
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
}
  
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.distance; //undefined
p2.distance; //undefined
  
console.log(Point.distance(p1, p2)); // 7.0710678118654755


/*When a static or prototype method is called without a value for this, the this value will be undefined
inside the method. This behavior will be the same even if the "use strict" directive isn't present,
because code within the class body's syntactic boundary is always executed in strict mode.*/
class Animal { 
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak(); // the Animal object
let speak = obj.speak;
speak(); // undefined

Animal.eat() // class Animal
let eat = Animal.eat;
eat(); // undefined

/*If the above is written using traditional function-based syntax, then autoboxing in method calls will 
happen in non–strict mode based on the initial this value. If the initial value is undefined, this
will be set to the global object.*/
function Animal() { }

Animal.prototype.speak = function() {
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
speak(); // global object

let eat = Animal.eat;
eat(); // global object