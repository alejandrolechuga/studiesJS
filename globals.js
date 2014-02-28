// Globals
var y = 2;

// *Antipattern*: var literal forgotten
x = 1;

// Every global variable you create becomes a property of the global object 
// in the global excecution context 'this' refers to the global object 
this.x;    // => 1 
this['x']; // => 1

// In browsers there's another reference called 'window' which points to the global object itself 
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