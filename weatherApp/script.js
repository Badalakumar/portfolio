async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "f0b16164b69acd4d6edc4ad0f94d6afe"; // Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const resultBox = document.getElementById("weatherResult");

  if (city === "") {
    resultBox.innerHTML = `<p>Please enter a city name.</p>`;
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const { name, main, weather, wind } = data;

    resultBox.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Temperature:</strong> ${main.temp}°C</p>
      <p><strong>Weather:</strong> ${weather[0].description}</p>
      <p><strong>Humidity:</strong> ${main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
    `;
  } catch (error) {
    resultBox.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
