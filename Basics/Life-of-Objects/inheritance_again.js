class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`This ${this.name} is a animal.`);
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
}


//To extend traditional functional based object
function Animal (name) {
    this.name = name;  
  }
  
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
}
  
class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
} //Do not need super() now
  
let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.



/* Classes cannot extend regular (non-constructible) objects. If you want to inherit from a 
regular object, you can instead use Object.setPrototypeOf()*/
const Animal = {
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  };
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  // If you do not do this you will get a TypeError when you invoke speak
  Object.setPrototypeOf(Dog.prototype, Animal);
  
  let d = new Dog('Mitzie');
  d.speak(); // Mitzie makes a noise.