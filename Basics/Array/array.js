let cars = ["Audi", "Bmw", "Buckati", "Ferrari"];


//Add to the end of an Array
cars.push("Tata");
cars.push("Toyota");
console.log(cars) //["Audi", "Bmw", "Buckati", "Ferrari", "Tata", "Toyota"];

//Remove from the end of the array
cars.pop();
console.log(cars); //["Audi", "Bmw", "Buckati", "Ferrari", "Tata"];

//Add to the front of an Array
cars.unshift("Toyota");
console.log(cars); //["Toyota", "Audi", "Bmw", "Buckati", "Ferrari", "Tata"];

//Remove from the front of an array
cars.shift();
console.log(cars); //["Audi", "Bmw", "Buckati", "Ferrari", "Tata"];

//Remove an items by index position
let pos = cars.indexOf("Buckati");
let newCars = cars.splice(pos, 2);
console.log(newCars); //["Buckati", "Ferrari"]
console.log(cars); //["Audi", "Bmw", "Tata"];


//Access items
cars.forEach(function(item, index, array){
    console.log(item, index);
});
//Audi 0 
//Bmw 1 
//Buckati 2 
//Ferrari 3