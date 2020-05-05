
let re = /quick\s(brown).+?(jumps)/ig;
let result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
console.log(result + '\n');
/* Match "quick brown" followed by "jumps", ignoring characters
in between. Save "borwn" and "jumps"*/


let reg_exp = /ab*/g;
let string = 'abbcdefabh';
let array;
while((array = reg_exp.exec(string)) !== null){
    console.log('Found' + array[0] + '. ' + 'Next matches starts: ' + reg_exp.lastIndex);
}
/*The lastIndex property will not be reset when searching a different
string, it will start its search at its existing lastIndex .
Also, be sure that the global flag ("g") is set, or it will also cause an infinite loop.*/