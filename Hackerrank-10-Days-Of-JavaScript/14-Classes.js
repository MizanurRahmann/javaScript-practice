class Polygon{
    constructor(bahu){
        this.bahu = bahu;
    }

    perimeter(){
        let total = 0;
        for(let i=0; i<this.bahu.length; i++){
            total = total + this.bahu[i];
        }
        return total;
    }
}


const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());