/// AJAX Implementation (Asynchronous JavaScript and XML)
  // Ajax Basic Script 
  var xhr = new XMLHttpRequest();
  xhr.onload = function (){
    console.log(this.responseText);
  };

  /**
  * @action open request
  * @arg method
  * @arg url
  * @arg asynchrounsly  
  */
  // Configures the request
  xhr.open('get', 'myfile.html', true);
  // Sends the request
  xhr.send();

/// Monitoring Progress
  var xhr = new XMLHttpRequest();
  function progress(event) {
    var percentComplete = event.loadded / event.total;
    console.log(percentComplete);
  }
  function status (event) {
    console.log(xhr.readyState);
  }
  // Events 
  xhr.addEventListener("progress", progress, false);
  xhr.addEventListener("load", status, false);
  xhr.addEventListener("error", status, false);
  xhr.addEventListener("abort", status, false);

  xhr.open('get', 'myfile.html', true);
  // Sends the request
  xhr.send();
/// Handling the onreadystatechange event
  xhr.addEventListener("readystatechange", function (e){
    var readystate = xhr.readyState;
    switch (readystate) {
      case 0:
        console.log(" UNSET open() has not been called yet");
        break;
      case 1:
        console.log(" OPENED send() has not been called yet");
        break;
      case 2: 
        console.log(" HEADERS_RECEIVED send has been called, and headers and status are available");
        break;
      case 3: 
        console.log(" LOADING downloading responseText" );
        break;
      case 4: 
        console.log(" DONE The operation is complete");
        break;
    }
  });

/// Sending the proper headers 
  // Post URL Encoded data 
    xhr.open('post', 'response.php', true);
    // Seing a post
    var params = "name=12345&id=1";
    //adding headers 
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Content-length", params.length);
    xhr.setRequestHeader("Connection", "close");
    xhr.send(params);

  // Seding JSON request payload
    var params = JSON.stringify({name:"Alejandro",id:1});
    xhr.open('post', 'response.php', true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.setRequestHeader("Content-length", params.length);
    xhr.setRequestHeader("Connection", "close");
    xhr.send(params);