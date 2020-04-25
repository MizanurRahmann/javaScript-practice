const capitalize = str => {
    const result = [];
    
    for(let word of str.split(' ')){
        result.push(word[0].toUpperCase() + word.slice(1));
    }
    return result.join(' ');
}

console.log(capitalize("A black dog jump over a wall"));