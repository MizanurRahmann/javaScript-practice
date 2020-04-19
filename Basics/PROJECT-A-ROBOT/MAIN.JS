const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Post Office",
    "Daria's House-Ernie's House",
    "Ernie's House-Grete's House",
    "Grete's House-Shop",
    "Marketplace-Post Office",
    "Marketplace-Town Hall",
    "Alice's House-Cabin",
    "Bob's House-Town Hall",
    "Daria's House-Town Hall",
    "Grete's House-Farm",
    "Marketplace-Farm",
    "Marketplace-Shop",
    "Shop-Town Hall"
];

function buildGraph(edges){
    let graph = Object.create(null);

    function addEdges(from, to){
        if(graph[from] == null){
            graph[from] = [to];
        } else{
            graph[from].push(to);
        }
    }
    for(let element of roads){
        let [from, to] = element.split("-");
        addEdges(from, to);
        addEdges(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
    }

    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            return this;
        }
        else{
            let parcels = this.parcels.map(p => {
                if(p.place != this.place)
                    return p;
                else
                    return {place: destination, address: p.address};
            }).filter(p => p.place != p.adress);
            return new VillageState(destination, parcels);
        }
    }
}

let first = new VillageState("Post Office", [{place: "Post Office", address: "Alice's House"}]);
    
let next = first.move("Alice's House");
console.log(next.place); // → Alice's House
console.log(next.parcels); // → []
console.log(first.place); // → Post Office
