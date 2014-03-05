/// Enforcing new 
  // calling a class as a function could lead to logical errors
  function Person() {
    this.name = "Alejandro";
  }
  // antipattern
  var me = Person();
  console.log(me.name);       // => "Cannot read property 'name' of undefined"
  console.log(window.name);   // => "Alejandro"

  var me = new Person();
  console.log(me.name);        // => "Alejandro"
  console.log(window.name);    // => "" somehow is a global object property should be undfied for another case

