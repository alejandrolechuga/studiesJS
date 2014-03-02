/// Singleton Patter
  // Singleton pattern is a class that returns the same instance in every instantiation
  var singleton =  (function() {
    // Singleton reference 
    var instance;
    // Module Pattern here
    function init () {
      var secretkey =  Math.random();
      function privateMethod (){
        return secretkey;
      }
      return {
        publicMethod: function () {
          return privateMethod();
        }
      }
    }
    // We return the same instance 
    return {
      getInstance: function () {
        if (!instance) {
          instance = init();
        }
        return instance;
      }
    }
  }());

  var obj = singleton.getInstance();
  obj.publicMethod()        // => 0.5304695672821254 
  var secondObj = singleton.getInstance();
  secondObj.publicMethod(); // => 0.5304695672821254 
  
  // Singleton with constructor 
  var singleton = (function(){
    var instance,
      _static;
    // Constructor
    function Module = function(options) {
      this.options = options || {};
      this.x = options.x;
      this.y = options.y;
    }
    _static = {
      getInstance: function (options) {
        if (!instance) {
          instance = new Module(options);
        }
        return instance;
      }
    };
    return _static;
  }());