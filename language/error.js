///  Error constructor

  try {
    // Stuff here 
    throw {
        name: "Custom Error"
      , message: "Oops"
      , remedy: handler
    }
  } catch(e) {
    console.log(e.message);
    e.remedy(); // calls handler
  }
