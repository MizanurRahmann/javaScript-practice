const Node = require('./Node'),
      Tree = require('./Tree'),
      levelWidth = require('./WidthOfEachLevel');


const tree1 = new Tree();
tree1.root = new Node(20);

tree1.root.add(23);
tree1.root.add(67);
tree1.root.add(19);

console.log(tree1);

tree1.root.children[0].add(3);
tree1.root.children[0].add(6);
tree1.root.children[0].add(7);
tree1.root.children[2].add(-10);

console.log(JSON.stringify(tree1, null, 3));

//Bredth First Search
console.log('Bredth First Search: ');
tree1.Bfs((node, index, tree) => {
    console.log('Node: ', node, 'Index: ', index, 'Tree: ', tree);
});

const levels = tree1.WidthOfEachLevel();
console.log('Level width of this tree is: ', levels);