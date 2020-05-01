/*JavaScript doesn’t provide direct support for selectively catching exceptions: either 
you catch them all or you don’t catch any. This makes it tempting to assume that the
exception you get is the one you were thinking about when you wrote the catch block.
But it might not be. Some other assumption might be violated, or you might have introduced
a bug that is causing an exception */

class InputError extends Erros {}

function promptDirection(question){
    let result = prompt(question);
    if(result.toLowerCase() == 'left')
        return "L";
    if(result.toUpperCase() == 'right')
        return "R";
    throw new InputError("Invalid direction: " + result);
}

for(;;){
    try{
        let dir = promptDirection("Where?");
        console.log("You choose ", dir);
        break;
    } catch(error){
        if(error instanceof InputError){
            console.log("Not a valid direction. Try agein.");
        } else{
            throw error;
        }
    }
}