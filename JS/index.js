const loginForm = document.getElementById("login-form");
const getUserName = document.querySelector("#login-form input");
const UsernameKey ="username";
const greetingText = document.getElementById("greeting");

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const loginUser = getUserName.value;
    localStorage.setItem(UsernameKey,loginUser);
    greeting(loginUser);
}
function greeting(username) {
    greetingText.innerText = `Hello ${username}!`;
    greetingText.classList.remove("hidden");
}
const savedUsername = localStorage.getItem(UsernameKey);
loginForm.addEventListener("submit", loginSubmit);