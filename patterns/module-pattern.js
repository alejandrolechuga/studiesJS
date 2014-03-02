/// The Module Pattern (Vainilla JavaScript Version)
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
/// *Module Pattern Variations*
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
  
// Dojo
  // Dojo provides a method to work with objects called ' dojo.setObject() ' . this method takes a string 
  // such as "module.parent.child" so your module defintion would be nested in child within module.parent even parent is not defined
  // this method can create any intermediate object as it were a path 
  // Traditional way to achieve this 
  "framework.library.module"
  var framework = window.module || {};
    // Intermediate defintion
  if (!framework['library']) {
    framework.library = {};
  }
    // Our Definition
  if (!framework.library['module']) {
    framework.library.module = {};
  }
    // Our module defintion
  framework.library.module = {  
  };

  // Dojo Style Definition (AMD)
  require(['framework/library/module']. function(module) {
    // setObject
    module.setObject("mod.test", (function () {
      var secretKey = "abc123"; // private property
      // private method
      function privateMethod() {
        return secretKey;
      }

      return {
        // public method 
        publicMethod: function () {
          return secretKey;
        }
      }
    }()));
  });
// ExtJS 
  // ExtJS it's pretty closed to the common Module Pattern , with ExtJS we define our namespace and then later 
  // we populate it with our module containing the private and public properties
  Ext.namespace ("module");

  module.app = (function () {
    var secretKey = "abc123";
    function privateMethod = function () {
      return secretKey;
    };
    return {
      publicMethod: function () {
        return privateMethod();
      }
    }
  }());
/// YUI 
  // YUI module implemenation is not so far from the Vainilla JavaScript Version
  Y.namespace("framework.library");
  Y.framework.library = (function () {
    var secretKey = "abc123";
    function privateMethod() {
      return secretKey;
    }
    return {
      publicMethod: function () {
        return privateMethod();
      }
    }
  }());
/// JQuery 
  // JQuery approach binds up the jQuery.ready with the module method init 
  // function wrapper
  function define(module){
    $(function () {
      if (module.init) {
        module.init();
      }
    });
    return module;
  }

  var module = define((function(){
    var secretKey = "abc123";
    function privateMethod(){
      return secretKey;
    }
    return {
      publicMethod: function() {
        return privateMethod();
      },
      init: function () {
        // called on JQuery.ready event 
      }
    }
  }());

/// The Revealing Module Pattern 
  //  Slightly improved version by Christian Heilmann 
  // This pattern keeps all the defintions in the function scope 
  // the function returns an anonymous object with pointers to the private properties

  var module = (function () {
    var secretKey = "abc123";
    function privateMethod() {
      return secretKey;
    }
    function publicMethod(){
      return privateMethod();
    }
    return {
      publicMethod: publicMethod
    }
  }());
  module.publicMethod(); // => "abc123"
