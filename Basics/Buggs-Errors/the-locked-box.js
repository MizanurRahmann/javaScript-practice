const box = {
    locked: true,
    content: [],
    unlock() {this.locked = false;},
    lock() {this.locked = true;},
    
}

function withBoxUnloacked(body){
    let locked = box.locked;
    if(!locked){
        return body();
    }
    box.unlock();
    try{
        return body();
    } finally{
        box.lock();
    }
}
console.log(box.locked); //true

withBoxUnloacked(function(){
    box.content.push("Gold piece");
});

try{
    withBoxUnloacked(function(){
        throw new Error ("Pirates on the horizon! Abort!");
    })
} catch(err){
    console.log("Error raised: " + err);
}

console.log(box.locked); //true