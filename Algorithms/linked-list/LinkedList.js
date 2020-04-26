const  Node = require('./Node')


class LinkedList{
    constructor(){
        this.head = null;
    }

    getSize() {
        let counter = 0;
        let node = this.head;

        while(node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return null;
        } else{
            let node = this.head;
            while(node){
                if(!node.next){
                    return node;
                }
                node = node.next;
            }
        }
    }

    removeFirst(){
        if(!this.head){
            return;
        } else{
            this.head = this.head.next;
        }
    }

    removeLast(){
        if(!this.head){
            return;
        } else if(!this.head.next){
            this.head = null;
        } else{
            let pre = this.head;
            let cur = this.head.next;

            while(cur.next){
                pre = node;
                cur = cur.next;
            }
            pre.next = null;
        }
    }

    insertAtFirst(item){
        this.head = new Node(item, this.head);
    }

    insertAtLast(item){
        const lastNode = this.getLast();
        const newNode = new Node(item);
        if(lastNode){
            lastNode.next = newNode;
        } else{
            this.head = newNode;
        }
    }

    getAt(index){
        let count = 0;
        let node = this.head;

        while(node){
            if(count === index){
                return node;
            }
            count++;
            node = node.next;
        }
        return null;
    }

    removeAt(index){
        if(!this.head){
            return;
        } else if(index === 0){
            this.head = this.head.next;
            return;
        } else{
            const pre = this.getAt(index - 1);
            if(!pre || !pre.next){
                return;
            }
            pre.next = pre.next.next;
        }
    }

    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data);
            return;
        } else if(index === 0){
            this.head = new Node(data, this.head);
        } else{
            const pre = this.getAt(index - 1) || this.getLast();
            pre.next = new Node(data, pre.next);
        }
    }

    midpoint() {
        let fast = this.getFirst();
        let slow = this.getFirst();
  
        while(fast.next && fast.next.next) {
          slow = slow.next;
          fast = fast.next.next;
        }
        return slow;
    }

    forEach(fn) {
        let node = this.head;
        let count = 0;
        while(node) {
            fn(node, count, this.head);
            node = node.next;
            count++;
        }
    }

    checkCircular(){
        let f = this.getFirst();
        let s = this.getFirst();

        while(f.next && f.next.next){
            f = f.next.next;
            s = s.next;
            if(f === s){
                return true;
            }
        }
        return false;
    }

    clear(){
        this.head = null;
    }
}


module.exports = LinkedList;