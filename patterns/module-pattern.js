/// The Module Pattern
  // Module Pattern is based in part on the Object Literal Pattern 
  // Module Pattern using IIFE (Immediately-Invoked Function Expression)
  // this pattern can emulate private properties using the function scope
  var module = (function(){
    // privatekey is not exposed , only the public methods have access to it
    var privatekey = "abc123";

    // It returns an object with access to a private properties
    return {
      // public method
      getKey: function() {
        return privatekey;
      },
      // public method
      emptyKey: function() {
        privatekey = "";
      }
    };
  }());

  module.getKey();    // => "abc123";
  module.emptyKey();  
  module.getKey();    // => "";

/// Importing Mixins
  // You can pass globals through our anonymous function and localy name them as you wish
  var module = (function (window, $) {
    var element = $("<input>");
    // private method
    function getElement(){
      return element[0];
    }
    return {
      // public method
      getEl: function () {
        // Calling a private method
        return getElement();
      }
    }
  }(this, jQuery));
  module.getEl(); // => <input>

/// Exports 
  // This way we can create public properties and consume them from the anonymous function scope
  // Also it can import globals
  var module = (function () {
    var mod = {};               // public because it will eventually be exposed
    var privatekey = "abc123";  // private property
    var consumed = false;       // private property
    function privateMethod() {
      privatekey = "";
    }

    mod.publicMethod = function () {
      if (consumed) {
        privateMethod();
      } else {
        consumed = true;        // private property consumed
      }
      return privatekey;
    }
    // module exposed 
    return mod;
  }());
  module.publicMethod(); // => "abc123"
  module.publicMethod(); // => ""
  
