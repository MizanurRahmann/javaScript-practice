//PRIMITIVE
var a = 20;
var b;
b = a;
++a;
console.log(a); //21
console.log(b); //20
/*It just copy the variable not the references*/


//OBJECT
var object1 = {
    name: 'Azox',
    age: 20
}
var object2 = object1;
object1.age = 30;
console.log(object1.age); //30
console.log(object2.age); //30
/*
For object it copies references to new object. It means when a assign a object to 
other object it does not create a new object it just create a references that points
to the old objects address.
*/


//FUNCTION
var age = 30;
var Azox = {
    name: 'Azox',
    city: 'Bogra'
}
function change(primitive, object){
    primitive = 35;
    object.city = 'Rajshahi';
}
change(age, Azox);
console.log(age); //30
console.log(Azox.city); //Rajsjhi
/*
When we pass a primitive value it pass a copy of a variable, but if we pass a
object it does not pass a copy of this object. It actually pass the references.
SO,if we chage the object parameter it change actual object.
 */