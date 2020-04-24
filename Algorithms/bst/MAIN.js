const BST = require('./bst'),


const bst = new BST(50);

//Insert Some node
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);
console.log(JSON.stringify(bst, null, 6));

//Find a Node
if(bst.search(20) != null){
    console.log("Tree has this node");
} else{
    console.log("Tree doesn't has this node");
}
if(bst.search(-10) != null){
    console.log("Tree has this node");
} else{
    console.log("Tree doesn't has this node");
}

//Delete Some Node
bst.delete(50);
bst.delete(20);
console.log(JSON.stringify(bst, null, 6));
