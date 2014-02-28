/// Single var pattern 
  // Common way to declare a group of variables  
function fn() {
  var start = 0;
  var finish = 1;
  var counter = 0;
  var increase = 2.5;
  var result; 
}

  // Single ' var ' Pattern*
function fn() {
  var start,
      finish = 1,
      counter = 0,
      increase = 2.5,
      result; 
}

  // Some programmers arrange it like this 
function fn() {
  var start
  , finish = 1
  , counter = 0
  , increase = 2.5
  , result; 
}

/// Hoisting