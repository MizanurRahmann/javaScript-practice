const fibonacci = n => {
    let list = [0, 1];
    for(let i=2; i<=n; i++){
        list.push(list[i-2] + list[i-1]);
    }
    return list;
}

module.exports = fibonacci;