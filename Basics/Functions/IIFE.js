(function(){
    var score = Math.ranfom() * 10;
    console.log(score >= 5);
})(); //false

console.log(score) //THrow a erro


(function(goodLuck){
    var score = Math.ranfom() * 10;
    console.log(score >= 5 - goodLuck);
})(5); //true