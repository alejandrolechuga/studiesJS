/// functions 
  // Antipattern
  // Passing large number of parameters is not convenient. 
  addCar("Mustang", "Ford", 2005, "red", new Date(), "California");
  // Is better to use objects instead
  addCar({
      model: "Mustang"
    , maker: "Ford"
    , year: 2005
    , color: "red"
    , time: new Date()
    , state: "California"
  });

  // function application 
  function fn(a, b) {
    return a + b;
  }
  // Calling with apply
  // The first parameter is null so this points to the global object
  fn.apply(null, [1, 2]); // => 3
  
  // Using an object
  var master = {
    skill: function () {
      return this;
    }
  };

  master.skill();  // => master{}
  skill.apply(master); // => master{}