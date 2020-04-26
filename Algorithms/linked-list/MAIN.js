const  Node = require('./Node'),
       LinkedList = require('./LinkedList');


const list = new LinkedList();
list.insertAtFirst(10);
list.insertAtFirst(11);
list.insertAtFirst(12);
// console.log(list);

//Get size
console.log(list.getSize());

//Get first node
console.log(list.getFirst());

//Get last node
console.log(list.getLast());

//Remove the first node
list.removeFirst();
console.log(list);

//Remove the last node
list.removeLast();
console.log(list);

//Insert last
list.insertAtLast(15);
console.log(list);
list.insertAtLast(27);

//Get node from a given index
console.log('Get at: ', list.getAt(1));

//Remove node from given index
list.removeAt(1);
console.log('After removing the node: ', list);

//Insert a node at a given index
list.insertAt(20, 10);
console.log('After inserting the node: ',list);

//Find out the midpoint
list.insertAtFirst(77);
list.insertAtFirst(66);
list.insertAtFirst(55);
console.log('Midpoint: ', list.midpoint());


// forEach
console.log('forEach: ');
list.forEach((n, i) => {
  console.log('Data:', n.data, 'Index:', i);
})

//Clear the list
list.clear();
console.log(list);

// Find the list is circular or not
const circularList = new LinkedList();
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

circularList.head = a;
a.next = b;
b.next = c;
c.next = d;
d.next = a;
console.log('Is this list circular:', circularList.checkCircular());