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

    delete(data, node=this){
        if(node == null)
            return node;
        if(data < node.data){
            node.left = this.delete(data, node.left);
        } else if(data > node.data){
            node.right = this.delete(data, node.right);
        } else{
            if(node.left == null && node.right == null){
                //If it has no child
                node = null;
                return node;
            } else if(node.left == null){
                //IF IT HAS ONLY RIGHT CHILD
                node = node.right;
                return node;
            } else if(node.right == null){
                //IF IT HAS ONLY LEFT CHILD
                node = node.left;
                return temp;
            } else{
                //IF IT HAS TWO CHILD
                let current = node.right;
                //find right small children
                while(current && current.left != null)
                    current = current.left;
                node.data = current.data;
                node.right = this.delete(current.data, node.right);
            }
        }
        return node;
    }

    search(data, node=this){
        if(node == null)
            return node;
        if(node.data == data){
            return node;
        } else if(node.data < data){
            return this.search(data, node.right);
        } else{
            return this.search(data, node.left);
        }
        return node;
    }
}


module.exports = BST;
