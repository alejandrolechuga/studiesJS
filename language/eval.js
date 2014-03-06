/// eval(string) this function takes an arbitray string and executes it as JavaScript code
  // antipattern
  var property = "name";
  alert(eval("obj." + property));
  // better
  var property = "name";
  alert(obj[property]);
  // Function(), setTimeout(), setInterval() as eval() they can evaluate strings into JavaScript code
  // antipatterns
  setTimeout("myFunc()", 1000);
  setTimeout("myFunc(1, 2, 3)", 1000);
  // better
  setTimeout(myFunc, 1000);
  setTimeout(function(){
    myFunc(1, 2, 3);
  }, 1000);

