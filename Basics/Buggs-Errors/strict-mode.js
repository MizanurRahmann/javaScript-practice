/* STRICT MODE : CONVERTING MISTAKES INTO ERRORS */

/*Normally, when you forget to put let in front of your binding, as with counter in the
example, JavaScript quietly creates a global binding and uses that. In strict mode, an
error is reported instead.*/

function canYouSpotTheProblem(){
    "use strict";
    for(counter=0; counter<10; counter++){
        console.log("Happy happy");
    }
}
canYouSpotTheProblem(); //ReferenceError: counter is not defined

"user strict";
function Person(name) {this.name = name};
let ferinand = Person('Ferdinand');
//TypeError: Cannot set property 'name' of undefined