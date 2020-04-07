function arrayToList(array){
    let list = null;
    for(let i=array.length-1; i>=0; i--){
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list){
    let array = [];
    for(let node=list; node; node=node.rest){
        array.push(node.value);
    }
    return array;
}

function prepend(value, list){
    return {value, rest: list};
}

function nTh(list, n){
    if(!list){
        return undefined;
    } else if(n==0){
        return list.value;
    } else{
        return nTh(list.rest, n-1);
    }
}


console.log(arrayToList([10, 20])); //{value: 10, rest:{value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20]))); //[10, 20]
console.log(prepend(10, prepend(20, null))); //{value: 10, rest:{value: 20, rest: null}}
console.log(nTh(arrayToList([10,20,30]), 1)); //20