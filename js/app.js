function loadWeather(){
    fetch("data/weather.json")
        .then(response => response.json())
        .catch(error => {
            console.error("Error loading weather:", error);
            displayWeatherError();
        });
}


function displayWeather(weather) {
    document.getElementById('weather-display').innerHTML = `
        <div class ="weather-current">
        <div class = "weather-icon">${weather.icon}</div>
        <div class = "weather-temp">${weather.temperature}°</div>
        <div class = "weather-condition">${weather.condition}</div>
        <div class = "weather-humidity">Humidity: ${weather.humidity}%</div>
        <div class = "weather-wind">Wind: ${weather.wind} km/h</div>
        </div>`;
}

function displayWeatherError() {
    document.getElementById('weather-display').innerHTML = `
       `<p class ="widget-error">Weather data is unavailable right now.</p>`;
}

loadWeather();