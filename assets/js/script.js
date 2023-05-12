document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    var form = document.getElementById("signup-form");
    var email = form.elements.email.value;
    var password = form.elements.password.value;
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "your-api-endpoint-url", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Successful response, handle the result here
        var response = JSON.parse(xhr.responseText);
        console.log(response);
      }
    };
    var data = JSON.stringify({ email: email, password: password });
    xhr.send(data);
  });