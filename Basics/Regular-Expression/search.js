/* The search() method executes a search for a match between a regular expression and this String object. */

let str = "amAr vai eR rokTe rangaNO"
console.log(str.search(/[A-Z]/g))// returns 2
console.log(str.search(/[.]/g))// returns -1