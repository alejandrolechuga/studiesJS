/// JSON 
  // Working with JSON 
  var jstring = '{"key":"value"}';
  // Antipattern
  var data = eval('(' + jstring + ')');
  // Better ES5 or library
  var data = JSON.parse(jstring);

  // From Object or Array to JSON string format
  var data = {
    name: "Alejandro",
    age: 28
  };

  var jstring = JSON.stringify(data); // => "{"name":"Alejandro", "age":28}"