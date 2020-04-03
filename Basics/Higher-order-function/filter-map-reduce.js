let SCRIPT = [
    {name: 'Coptic', direction: 'ltr', living: false, year: 200},
    {name: 'Mandarin', direction: 'ttb', living: true, year: 100},
    {name: 'Arabic', direction: 'rtl', living: true, year: 15}
];

//map()
function map(array, transform){
    let mapped = [];
    for(let element of array){
        mapped.push(transform(element));
    }
    return mapped;
}
console.log(map(SCRIPT, s => s.name));
//Output: ["Coptioc", "Mandaring", "Arabic"]


//filter()
function filter(array, test){
    let passed = [];
    for(let element of array){
        if(test(element)){
            passed.push(element);
        }
    }
    return passed;
}
console.log(filter(SCRIPT, s => s.living));
//Output: [{name: 'Mandarin', direction: 'ttb', living: true}, {name: 'Arabic', direction: 'rtl', living: true}]


//reduce()
function reduce(array, combine, start){
    let current = start;
    for(let element of array){
        current = combine(current, element);
    }
    return current;
}
console.log(reduce([1,2,3,4], (a,b) => a+b , 0));
//Output: 10


//Using as a standard array method
function average(array){
    return array.reduce((a,b) => a+b)/array.length;
}
console.log(Math.round( average(
    SCRIPT.filter(s => s.living).map(s => s.year))));
//Output: 58