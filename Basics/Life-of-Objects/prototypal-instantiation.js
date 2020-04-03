function Animal (name, energy) {
    let animal = Object.create(Animal.prototype)
    animal.name = name
    animal.energy = energy
  
    return animal
  }
  
  Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  
  Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  
  Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
  
  const leo = Animal('Leo', 7)
  const snoop = Animal('Snoop', 10)
  
  leo.eat(10)
  snoop.play(5)

/*prototype is just a property that every function in JavaScript has. It allows us to share 
methods across all instances of a function. we can just use another object that comes built
into the Animal function itself, Animal.prototype.*/