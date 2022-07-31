const API_KEY = "afce94ae16bf192b71de5023194e372e"
const cityApear = document.querySelector("#weather span:first-child");
const weatherApear = document.querySelector("#weather span:last-child");

function findLoc(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const API_URL =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            cityApear.innerText = data.name;
            weatherApear.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        })
}
function failToFind() {
    alert("I can't find you")
}
navigator.geolocation.getCurrentPosition(findLoc,failToFind);