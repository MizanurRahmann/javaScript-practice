//Object.create allows us to create an object which will delegate to another object on failed lookups.
const parent = {
    name: 'Stacey',
    age: 35,
    heritage: 'Irish'
  }
  
  const child = Object.create(parent)
  child.name = 'Ryan'
  child.age = 7
  
  console.log(child.name) // Ryan
  console.log(child.age) // 7
  console.log(child.heritage) // Irish

/*So in the example above, because child was created with Object.create(parent), whenever there’s a
failed property lookup on child, JavaScript will delegate that lookup to the parent object. What
that means is that even though child doesn’t have a heritage property but parent does so, when we log
child.heritage we’ll get the parent’s heritage which was Irish.*/



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
    let animal = Object.create(animalMethods)
    animal.name = name
    animal.energy = energy
  
    return animal
  }
  
  const leo = Animal('Leo', 7)
  const snoop = Animal('Snoop', 10)
  
  leo.eat(10)
  snoop.play(5)

  /*So now when we call leo.eat, JavaScript will look for the eat method on the leo object. 
  That lookup will fail, then, it’ll delegate to the animalMethods (because of Object.create)
  object which is where it’ll find eat. BUT THIS THING CAN BE IMPROVED USING PROTOTYPE. SEE
  prototype-instantiation.js*/