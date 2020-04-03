function reverseString(s) {
    try {    
        let arr = s.split("");
        arr = arr.reverse();
        arr = arr.join("");
        console.log(arr);
    } catch(error) {
        console.log(error.message);
        console.log(s);
    }
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}