const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const cityName = document.querySelector('.city-name');
const tempValue = document.querySelector('.temp-value');
const weatherCondition = document.querySelector('.weather-condition');

const apiKey = "47f45823f3bb43a1b5783507252407";

searchBtn.addEventListener("click", () => {
    const city = searchInput.value.trim();

    if (city === "") {
        alert("Please enter a city");
        return;
    }

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found or error with API");
            }
            return response.json();
        })
        .then(data => {
            console.log("Weather data:", data);
            cityName.textContent = data.location.name;
            tempValue.textContent = `${data.current.temp_c}°C`;
            weatherCondition.textContent = data.current.condition.text;
        })
        .catch(error => {
            alert("Could not fetch weather. Check city name or your internet.");
            console.error("Error fetching weather:", error);
        });
});
