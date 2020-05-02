
let re1 = /abc/; //Using a regular expression literal
/*Regular expression literals provide compilation of the regular expression when the script
is loaded. If the regular expression remains constant, using this can improve performance.*/

let re2 = new RegExp('abc'); //Using constructor function RegExp
/*Using the constructor function provides runtime compilation of the regular expression. Use the
constructor function when you know the regular expression pattern will be changing, or you don't
know the pattern and are getting it from another source, such as user input.*/

