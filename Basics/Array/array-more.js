
console.log("one two three".indexOf("ee")); //11
console.log("okay \n ".trim()); //okay
console.log(String(67).padStart(5, "0")); //00067

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");

console.log(words); //["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". ")); //Secretarybirds. specialize. in. stomping


console.log("LA".repeat(3)); //LALALA


//Rest parameter
let numbers = [5, 1, 7];
console.log(max(...numbers)); //7

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]); //["will", "never", "fully", "understand"]
