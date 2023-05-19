function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" && password === "") {
    document.getElementById("message").innerHTML =
      "Username and password fields cannot be empty";
    document.getElementById("message").className = "error-message";
    return false;
  } else if (username === "") {
    document.getElementById("message").innerHTML =
      "Username field cannot be empty";
    document.getElementById("message").className = "error-message";
    return false;
  } else if (password === "") {
    document.getElementById("message").innerHTML =
      "Password field cannot be empty";
    document.getElementById("message").className = "error-message";
    return false;
  } else if (
    username === "correct_username" &&
    password === "correct_password"
  ) {
    window.location.href = "hover_and_select.html";
    return false;
  } else {
    document.getElementById("message").innerHTML =
      "Password or username is incorrect";
    document.getElementById("message").className = "error-message";
    return false;
  }
}
