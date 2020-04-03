function factorial(n){
    let result = 1;
    for(let i=2; i<=Number(n); i++){
        result *= i;
    }
    return result;
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}