const usernameValue = localStorage.getItem("username");
const emailValue = localStorage.getItem("email");
const passwordValue = localStorage.getItem("password");

const userHolder = document.getElementById("usernameHolder");
const emailHolder = document.getElementById("emailHolder");
const passwordHolder = document.getElementById("passwordHolder");

userHolder.textContent = "Username: " + usernameValue;
emailHolder.textContent = "Email: " + emailValue;
passwordHolder.textContent = "Password: " + passwordValue;