/// Array Literal 
  // antipattern
  var list = new Array(1,2,3);

  // literal notation 
  var list = [1, 2, 3];

  // Avoiding the use of new Array() constructor
  // this doesn't creat an array with one element it creates an array with length of 3 
  var list = new Array(3); // [undefined × 3]
  list[0]; // => undefined

  // better
  var list = [3];
  list[0]; // => 3
/// is Array ? 
  console.log( typeof list === "object");  // => true
  console.log( list.constructor === Array); // => true
  // ES5
  Array.isArray(list); // => true
