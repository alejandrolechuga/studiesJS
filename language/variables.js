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
  // is when you declare multiple variables in different parts of your function and all behave as they were declared
  // at the top of the function 
  x = "Global Space"; // => *Antipattern*
  function fn() {
    x; // => undefined
    var x = "Local Space";
    x; // => "Local Space"
  }

