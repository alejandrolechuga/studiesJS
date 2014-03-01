/// Object Literal Pattern 
  // Is a way to wrap your module using the Object literals
  var module = {
    key: "value", 
    getKey: function () {
      return this.key;
    },
    setKey: function (value) {
      this.key = value;
    }
  };
  module.key;       // => "value"
  module.getKey();  // => "value"
  module.setKey("abc");
  module.getKey();  // => "abc"