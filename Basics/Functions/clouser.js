/*
An inner function has always access to the variables and parameter
of its outer function, even after the outer function has returned.
 */
function retirements(rAge){
    var msg = ' years left untill retirement'

    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((rAge - age) + msg);
    }
}

var retirementUS = retirements(66); //Outer function is called

retirementUS(1990); //But we can access of msg variable.