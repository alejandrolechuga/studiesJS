/// The Module Pattern
  // Module Pattern is based in part on the Object Literal Pattern 
  // Module Pattern using IIFE (Immediately-Invoked Function Expression)
  // this pattern can emulate private properties using the function scope
  var module = (function(){
    // privatekey is not exposed , only the public methods have access to it
    var privatekey = "abc123";

    // It returns an object with access to a private properties
    return {
      getKey: function() {
        return privatekey;
      },
      emptyKey: function() {
        privatekey = "";
      }
    };
  }());

  module.getKey();    // => "abc123";
  module.emptyKey();  
  module.getKey();    // => "";

  // Importing Mixins
  // You can pass globals through our anonymous function and localy name them as you wish
  var module = (function (window, $) {
    var element = $("<input>");
    // private method
    function getElement(){
      return element[0];
    }
    return {
      getEl: function () {
        // Calling a private method
        return getElement();
      }
    }
  }(this, jQuery));
  module.getEl(); // => <input>