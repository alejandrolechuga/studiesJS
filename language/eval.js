/// eval(string) this function takes an arbitray string and executes it as JavaScript code
  // antipattern
  var property = "name";
  alert(eval("obj." + property));
  // better
  var property = "name";
  alert(obj[property]);
  // Function(), setTimeout(), setInterval() as eval() they can evaluate strings into JavaScript code
  // antipatterns
  setTimeout("myFunc()", 1000);
  setTimeout("myFunc(1, 2, 3)", 1000);
  // better
  setTimeout(myFunc, 1000);
  setTimeout(function(){
    myFunc(1, 2, 3);
  }, 1000);

/// Global object pollution 
  // examples
  console.log(typeof uno);      // => undefined 
  console.log(typeof dos);      // => undefined
  console.log(typeof tres);     // => undefined

  // messes up with the global object
  var string = "var uno = 1; console.log(uno);";
  eval(string);                 // => 1
  // functions are more sandboxed 
  var string = "var dos = 2; console.log(dos);";
  new Function(string);         // => 2

  var string = "var tres = 3; console.log(tres);";
  (function(){
    eval(string);
  }());                         // => 3

  console.log(typeof uno);      // => "number"
  console.log(typeof dos);      // => undefined
  console.log(typeof tres);     // => undefined
/// eval can modify it's outer scope 
  (function(){
    // Outer Scope
    var local = "value";
    eval("local = false; console.log(local);"); // => false
    console.log(local);                         // => false
  }());
  
  // in the other hand 
  (function() {
    var local = 1; 
    Function("console.log(typeof local);")(); // => undefined 
  }());

