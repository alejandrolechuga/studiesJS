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

// ES5 Approaches
  // Object.defineProperty
  Object.defineProperty(obj, "key", {
    value: "value",
    writable: true,
    enumerable: true,
    configurable: true
  });

  // defineProperty Short-hand 
  var defineProp = function (obj, key, value) {
    var config = {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(obj, key, config);
  };

  // Populating 
  var book =  Object.create(null);
  defineProp(book, "title", "The Good Parts");
  defineProp(book, "author", "Douglas Crockford");
  defineProp(book, "publisher", "O'reilly");
  book; // => Object {title: "The Good Parts", author: "Douglas Crockford", press: "O'reilly"} 

  // Object.defineProperties
  var obj = {};
  Object.defineProperties(obj, {
    "name": {
      value: "Alejandro Amador",
      writable: true
    },
    "age": {
      value: 28,
      writable: false
    }
  });

  // Basic Constructor
  function Book(title, author, publisher) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    // Each time we create an object type Book the toString method gets redifined for each new instance
    this.toString = function () {
      return this.title + ", " + this.author + ", " + this.publisher;
    }
  }

  var theGoodParts = new Book( "TheGoodParts", "Douglas Crockford", "O'reilly");
  theGoodParts.toString(); // => "TheGoodParts, Douglas Crockford, O'reilly"
  var jsPatterns = new Book ("JavaScript Patterns", "Stoyan Stefanov", "O'reily");
  jsPatterns.toStrings(); // => "JavaScript Patterns, Stoyan Stefanov, O'reily"

  // Constructor with Prototype 
  function Book(title, author, publisher) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
  }
  // This method is shared among all instances 
  Book.prototype.toString = function () {
    return this.title + ", " + this.author + ", " + this.publisher;
  };

  var theGoodParts = new Book( "TheGoodParts", "Douglas Crockford", "O'reilly");
  theGoodParts.toString(); // => "TheGoodParts, Douglas Crockford, O'reilly"
  var jsPatterns = new Book ("JavaScript Patterns", "Stoyan Stefanov", "O'reily");
  jsPatterns.toStrings(); // => "JavaScript Patterns, Stoyan Stefanov, O'reily"