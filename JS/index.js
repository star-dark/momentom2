const loginForm = document.getElementById("login-form");
const getUserName = document.querySelector("#login-form input");
const UsernameKey ="username";
const greetingText = document.getElementById("greeting");

function loginSubmit(event){
    event.preventDefault();
    const loginUser = getUserName.value;
    localStorage.setItem(UsernameKey,loginUser);
    loginForm.classList.add("hidden");
    greeting(loginUser);
}
function greeting(username) {
    greetingText.innerText = `Hello ${username}!`;
    greetingText.classList.remove("hidden");
}
loginForm.addEventListener("submit", loginSubmit);