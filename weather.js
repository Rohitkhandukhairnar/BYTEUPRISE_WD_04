document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '8213a09a7fdd0d3a9847d94c5560e45a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfoDiv = document.getElementById('weatherInfo');
        if (data.cod === 200) {
            const weatherData = `<h2>${data.name}, ${data.sys.country}</h2>
            <p><img src="thermometer.png" alt="Temperature Icon" style="vertical-align:middle;">
            Temperature: ${data.main.temp} °C</p>
            <p>
            <img src="cloudy-day.png" alt="Weather Icon" style="vertical-align:middle;">
            Weather: ${data.weather[0].description}</p>
            <p>
            <img src="wind-power.png" alt="Wind Icon" style="vertical-align:middle;">
            Wind Speed: ${data.wind.speed} m/s</p>`;
            weatherInfoDiv.innerHTML = weatherData;
        }

                                    else {
                weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});
