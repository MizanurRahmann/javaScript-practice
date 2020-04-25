const SelectionSort = arr => {
    for(let i=0; i<arr.length; i++){
        let position = i;

        for(let j=i+1; j<arr.length; j++){
            if(arr[position] > arr[j]){
                position = j;
            }
        }

        if(position !== i){
            let temp = arr[i];
            arr[i] = arr[position];
            arr[position] = temp;
        }
    }
    return arr;
}

module.export = SelectionSort;