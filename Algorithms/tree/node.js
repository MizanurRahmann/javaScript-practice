class Node{
    constructor(data){
        this.data = data;
        this.distanceFromRoot = 0;
        this.children = [];
    }
    add(item){
        let newNode = new Node(item);
        newNode.distanceFromRoot = this.distanceFromRoot + 1;
        this.children.push(newNode);
    }
    remove(item){
        this.children = this.children.filter(child => child.data != item);
    }
}

module.exports = Node;
