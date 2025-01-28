let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

let usernameValue;
let emailValue;
let passwordValue;



document.getElementById("form").addEventListener("submit", (event) => {
  console.log("Form submitted");
  event.preventDefault();

  if (usernameValue === "" || emailValue === "" || passwordValue === "") {
    alert("Please fill in all fields");
    return false;
  }

  usernameValue = username.value;
  emailValue = email.value;
  passwordValue = password.value;

  localStorage.setItem("username", usernameValue);
  localStorage.setItem("email", emailValue);
  localStorage.setItem("password", passwordValue);

  window.location.href = "../profile/profile.html";
});

console.log("v2.0");