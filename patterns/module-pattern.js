/// The Module Pattern
  // Module Pattern is based in part on the Object Literal Pattern 
  // Module Pattern using IIFE (Immediately-Invoked Function Expression)

  var module = (function(){
    var privatekey = "abc123";
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