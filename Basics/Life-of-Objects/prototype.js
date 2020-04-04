function Animal (name, energy) {
    this.name = name;
    this.energy = energy;
  }
  
  Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  }
  
  Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  }
  
  Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  }
  
  const leo = new Animal('Leo', 7);
  const snoop = new Animal('Snoop', 10);

  /*Here 'new' keyword is for creating a empty object and return this object and 'this' keyword
  for indicating the new object. So, when the function constructor called with 'new' keyword. It
  first create a new blank object, after that with the help of 'this' keyword. It assigns the
  values (which are passed as a parameters) to the new object.*/

  const leo = Animal('Leo', 7);
  console.log(leo); //Undefined

  /*If we invoke the function without new keyord this (which actually indicate a object or we
  can say a object) never gets created nor does it get implicitly returned. Then the name of
  this pattern is PSEUDOCLASSICAL INSTANTIATION*/