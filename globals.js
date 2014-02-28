// Globals
var y = 2;

// Antipattern: var literal forgotten
x = 1;

// Every global variable you create becomes a property of the global object 
// in the global excecution context 'this' refers to the global object 
this.x;    // => 1 
this['x']; // => 1

// In browsers there's another reference calle 'window' whic point to the global object itself 
this === window; // => true
window.y;        // => 2
window['y'];     // => 2


