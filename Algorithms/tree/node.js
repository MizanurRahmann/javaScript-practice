class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }
    add(item){
        this.children.push(new Node(item));
    }
    remove(item){
        this.children = this.children.filter(child => child.data != item);
    }
}

module.exports = Node;