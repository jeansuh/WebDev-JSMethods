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
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};