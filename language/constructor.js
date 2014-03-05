/// Enforcing new 
  // calling a class as a function could lead to logical errors
  // Naming convention:  use the first letter uppercase if is a constructor , and lowecarse for functions, methods
  function Person() {
    this.name = "Alejandro";
  }
  // antipattern
  var me = Person();
  console.log(me.name);         // => "Cannot read property 'name' of undefined"
  console.log(window.name);     // => "Alejandro"

  var me = new Person();
  console.log(me.name);         // => "Alejandro"
  console.log(window.name);     // => undefined (empty)somehow is a global object property should be undfied for another case

/// Self-Invoking Constructor 
  function Person() {
    if (!(this instance of Person)) {
      return new Person();
    }
    this.name = "Alejandro";
  }

  var me = Person();  
  console.log(me.name);         // => "Alejandro"
  console.log(window.name);     // => undefined

  var me = new Person();
  console.log(me.name);         // => "Alejandro"
  console.log(window.name);     // => undefined

  