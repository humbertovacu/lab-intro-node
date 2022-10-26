const e = require("express");

class SortedList {
  constructor(...items) {
    this.items = items;
    this.length = items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a,b){return a - b});
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items[pos]==undefined) throw new Error('OutOfBounds');
    else return this.items[pos]; 
  }

  max() {
    if(!this.items.length) throw new Error('EmptySortedList');
    else return Math.max(...this.items);
  }

  min() {
    if(!this.items.length) throw new Error('EmptySortedList');
    else return Math.min(...this.items);
  }

  sum() {
    if(this.items.length) return this.items.reduce((previousValue,currentValue) =>
      previousValue + currentValue);
    else return 0;
  }

  avg() {
    let totalSum = this.items.reduce((previousValue,currentValue) =>
      previousValue + currentValue);
    if(!this.items.length) return 0;
    else return totalSum/this.items.length;
  }
}

module.exports = SortedList;

const testList = new SortedList();



// testList.add(7);
// testList.add(9);
// testList.add(2);
// testList.add(40);
// testList.add(400);
// testList.add(14);


console.log(testList.length);



