// SOURCE = MDN

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};
Person.prototype.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
};

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
  
    this.subject = subject;
}
/*All is good so far, but we have a problem. We have defined a new constructor, and it has a prototype
property, which by default just contains an object with a reference to the constructor function itself.
It does not contain the methods of the Person constructor's prototype property.*/



//To inherit the methods defined on Person()'s prototype
console.log(Teacher.prototype.constructor) //function Teacher(first, last, age, gender, interests, subject)
Teacher.prototype = Object.create(Person.prototype);
console.log(Teacher.prototype.constructor) //function Person(first, last, age, gender, interests)

/*Teacher.prototype's constructor property is now equal to Person(), because we just set 
Teacher.prototype to reference an object that inherits its properties from Person.prototype!*/


Object.defineProperty(Teacher.prototype, 'constructor', { 
    value: Teacher, 
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true 
});
/*Now if you save and refresh, entering Teacher.prototype.constructor should return Teacher(), as desired, 
plus we are now inheriting from Person()!*/

Teacher.prototype.greeting = function() {
    let prefix;
  
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      prefix = 'Ms.';
    } else {
      prefix = 'Mx.';
    }
  
    alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};


// Now test
let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');

teacher1.name.first; //acces from Person
teacher1.interests[0]; //access from Person
teacher1.subject; //access from Teacher
teacher1.greeting(); //access from Teacher