function isPositive(a) {
    if (a === 0){
        throw Error("Zero Error");
    } else if (a < 0){
        throw Error("Negative Error");
    } else{
        return "YES";
    }
}


function main() {
    const n = +(readLine());
    
    for (let i = 0; i < n; i++) {
        const a = +(readLine());
      
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}