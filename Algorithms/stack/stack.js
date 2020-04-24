class Stack {
    constructor(data = []) {
      this.data = data;
    }
    push(item){
      this.data.push(item);
    }
    pop(){
      return this.data.pop();
    }
    top(){
      return this.data[0];
    }
  }
  
  module.exports = Stack;