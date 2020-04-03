var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style == 'formal'){
            console.log('Good '+ timeOfDay + ' Ladies and gentleman! I\'m '
                        + this.name+' I am a ' +this.job+' and I\'m '
                        + this.age + ' years old.');
        } else if(style == 'friendly'){
            console.log('Hey! What\'s up? I\'m '+this.name + '. I\'m a '
            + this.job+' and I\'m '+ this.age + ' years old.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer',
};

john.presentation('formal', 'morning');


//CALL method (Method Borrowing)
john.presentation.call(emily, 'friendly', 'afternoon');

//BIND method
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');