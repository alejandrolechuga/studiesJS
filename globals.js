// Globals
var y = 2;

// *Antipattern*: var literal forgotten
x = 1;

// Every global variable you create becomes a property of the global object 
// in the global excecution context ' this ' refers to the global object 
this.x;    // => 1 
this['x']; // => 1

// In browsers there's another reference called ' window ' which points to the global object itself 
this === window; // => true
window.y;        // => 2
window['y'];     // => 2

// Globals are shared in the same global namespace , this is a problem because 
// there's a chance of overriding values 

// Implied Globals
// Every variable you don't declare becomes a property of the global object
// Example : 
function secretkey() {
  password = "abc123"; // *Antipattern*
  return md5(password);
}
secretkey(); // => e99a18c428cb38d5f260853678922e03
password;    // => "abc123"

// Chained Assignments create implied globals 
function fn() {
  var x = y = z = 0; // *Antipattern*
}
// there's a right-left evaluation 
// where the expression ' z = 0 ' is evaluated first , so ' z ' is not declared neither ' y '
// ' x ' is the only declared variable
fn();
z;    // => 0
y;    // => 0
x;    // => "Error: x is not defined"

// implied globals can be deleted , global declared variables can't 
var x = 1; 
y = 2; 

delete x; // => false
x;        // => 1
delete y; // => true
y;        // => "Error: y is not defined"

//Accesing Global Object without hardcoding ' window ' (doesn't work with strict mode)
var global = (function () {
  return this;
}()); 


