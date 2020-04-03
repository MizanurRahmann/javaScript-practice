//This is called a constructor function because it is responsible for creating a object
function Animal (name, energy) {
  let animal = {}
  animal.name = name
  animal.energy = energy

  animal.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }

  animal.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }

  animal.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }

  return animal
}

/* Now whenever we want to create a new animal (or more broadly speaking a new “instance”), 
all we have to do is invoke our Animal function, passing it the animal’s name and energy
level. This works great and it’s incredibly simple. */

const leo = Animal('Leo', 7)  //Functional Instance
const snoop = Animal('Snoop', 10) ////Functional Instance

/*Here three methods (eat, sleep, and play) are not only dynamic, but they’re also completely generic.
That means, whenever we create a new animal. We’re just wasting memory and making each animal object
bigger than it needs to be.*/




const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  },
  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

function Animal (name, energy) {
  let animal = {}
  animal.name = name
  animal.energy = energy
  animal.eat = animalMethods.eat
  animal.sleep = animalMethods.sleep
  animal.play = animalMethods.play

  return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

/*By moving the shared methods to their own object and referencing that object inside of our 
Animal function, we’ve now solved the problem of memory waste and overly large animal objects.
And it can be improved by using object.create*/