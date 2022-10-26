class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a,b){return a - b});
  }

  get(pos) {
    if(this.items[pos]==undefined) throw new Error('OutOfBounds');
    else return this.items[pos]; 
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

const testList = new SortedList(5,11,23,1);


testList.add(7);
testList.add(9);
testList.add(2);
testList.add(40);


