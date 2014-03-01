/// Constructor Pattern 
  // Ways to create an Object
  var obj = {};                               // Short 
  var obj = new Object();                     // Using the built-in 
  var obj = Object.create(Object.prototype);  // Method Creates an object with a specified prototype 
  
  // Ways to assign keys to an object
  obj.key = "value";
  obj.key;              // => "value"
  obj["key"] = "value";
  obj["key"]            // => "value"

  //ES5 Approaches
  //Object.defineProperty
  Object.defineProperty(obj, "key", {
    value: "value",
    writable: true,
    enumerable: true,
    configurable: true
  });

  //defineProperty Short-hand 
  var defineProp = function (obj, key, value) {
    var config = {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(obj, key, config);
  };

  