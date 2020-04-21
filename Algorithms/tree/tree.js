class Tree{
    constructor(){
        this.root = null;
    }

    Bfs(fn){
        const aQueue = [this.root];
        let count = 0;
        while(aQueue.length != 0){
            const node = aQueue.shift();
            aQueue.push(...node.children);
            fn(node, count, this);
            count++;
        }
    }

    WidthOfEachLevel (){
        const array = [this.root, 'end'];
        const counter = [0];
    
        while(array.length > 1){
            const node = array.shift();
            if(node == 'end'){
                counter.push(0);
                array.push('end');
            }
            else{
                array.push(...node.children);
                counter[counter.length - 1]++;
            }
        }
        return counter;
    }

    DistanceFromRoot(){
        let distances = [];

    }
}


module.exports = Tree;