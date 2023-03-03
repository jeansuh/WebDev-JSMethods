/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
    let newArray = [];
  for (let i = 0; i < this.length; i++){
    newArray.push(callbackFn(this[i],i,this));
  }
  return newArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    let newArray = [];
    for (let i = 0; i < this.length; i++){
      if(callbackFn(this[i],i,this)){
        newArray.push(this[i]);
      }
    }
  return newArray;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for (let i = 0; i < this.length; i++){
    if(callbackFn(this[i])){
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for (let i = 0; i < this.length; i++){
    if(!callbackFn(this[i])){
      return false;
    }
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  let num = 0;
  for (let i = 0; i < this.length; i++){
      num += callbackFn(this[i], i)
  }
  return num;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for(let i = 0; i < this.length; i++){
    if(searchElement == this[i]){
      return true;
    }
  }
  return false;};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for(let i = 0; i < this.length; i++){
    if(searchElement == this[i]){
      return i;
    }
  }
  return false;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  var index;
  for(let i = 0; i < this.length; i++){
    if(searchElement == this[i]){
      index = i;
    }
  }
  return index;
};

// KEYS //
Object.myKeys = function(object) {
  let newArray = []
  for (var prop in object) {
    newArray.push(prop)
  }
  return newArray;
};

// VALUES //
Object.myValues = function(object) {
  let newArray = []
  for (var prop in object){
    newArray.push(object[prop])
  }
  return newArray;
};


let arr = [1,2,3]
arr = arr.myMap(e => e*2);
console.log(arr);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.myFilter(word => word.length > 6);
console.log(result);

const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.mySome(even));

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.myEvery(isBelowThreshold));
// Expected output: true


const array2 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array2.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.myKeys(object1));
// Expected output: Array ["a", "b", "c"]

// Expected output: 10


console.log(Object.myValues(object1));
