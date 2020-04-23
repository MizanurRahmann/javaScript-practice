class BST{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data, node=this){
        if(node == null){
            return (new BST(data));
        } else if(data < node.data){
            node.left = this.insert(data, node.left);
        } else if(data > node.data){
            node.right = this.insert(data, node.right);
        }
        return node;
    }

    search(data, node=this){
        if(node.data == data){
            return node;
        } else if(node.data < data){
            this.search(data, node.right);
        } else{
            return this.search(data, node.left);
        }
    }
}


module.exports = BST;