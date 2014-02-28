/// for loop
  // usual for loop 
  for (var i = 0; i < array.length; i++) {
    // Traversing array
  }

  // array.length is accessed in each iteration , this slows down the 
  // code especially when the array is a DOM collection so we need to 
  // cache the length of the array

  for (var i = 0, length = array.length; i < length; i++) {
    // Traversing array
  }

  // Or taking the Single var pattern externally 
  var i = 0
  , array = [1, 2, 3]
  , length = array.length;

  for (;i < length; i++) {
    // Traversing array
  }

/// One less variable pattern 
  // we remove the length and optimize the loop 
  // this loop is counting down and ends until i equals 0 
  var i, array = [1, 2, 3];
  for (i = array.length; i--;) {
    // Traverse array
  }

  // Another to implement this pattern is using a while loop it also counts down
  var array = [1, 2, 3]
  , i = array.length;
  while (i--) {
    // Traverse array
  }