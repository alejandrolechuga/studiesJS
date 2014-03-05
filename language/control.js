/// Switch Pattern
  var result = "",
      value = 1;
    // Align cases with switch
    // indent case code
    // end switch with default
    // avoid fall-through 
    switch (value) {
    case 0:
      result = " zero ";
      break;
    case 1:
      result = " one ";
      break;
    case 2:
      result = " two ";
      break;
    case 3:
      result = " three ";
      break;
    default: 
      result = " default ";
    }

/// Implied Typecasting
  // Antipatterns 
  if (false == 0) {
  }
  if (false == "") {
  }
  // Better use === or !==
  if (false === 0) { // => false
  }
  if (false === "") { // => false
  }



