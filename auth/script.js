document.getElementById("username").title = "Enter your username";
document.getElementById("password").title = "Enter your password";

function validateForm() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if (username === "correct_user" && password === "correct_password") {
  window.location.href = "hover_and_select.html";
  return false;
} else {
  document.getElementById("message").innerHTML = "Password or username is incorrect";
  document.getElementById("message").className = "error-message";
  return false;
}
}