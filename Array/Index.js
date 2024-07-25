class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  get(index){
    return this.data[index]
  }
  shift(){
    const firstItem = this.data[0];
    for(let i=0;i<this.length;i++){
        this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
  deleteByIndex(index){
    const item = this.data[index];
    for(let i = index;i<this.length - 1;i++){
        this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const newArray = new MyArray();
newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.push(4);
console.log(newArray)
console.log(newArray.deleteByIndex(2))
console.log(newArray)