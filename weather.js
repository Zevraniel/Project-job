const apiKey = "6e8e9618f5550af5617eea145b008793";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//načte okno do kterého se zadává město,tlačítko a ikonu počasí
const cityInput = document.querySelector(".search input");
const cityButton = document.querySelector(".search button");
const icon = document.querySelector(".icon");
// vytvoří funkci asynchroního js a využívá await/počkej než se nahraje api
const Weather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`); // přidá city a klíč API do url adresy
  let data = await response.json(); //uloží data z API do data

  //vybere a zaplní všechny údaje tím,co stáhl z API.
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".hum").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
//změna ikon podle počasí
  if (data.weather[0].main == "Clouds") {
    icon.src = "imgWeather/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    icon.src = "imgWeather/clear.png";
  } else if (data.weather[0].main == "Rain") {
    icon.src = "imgWeather/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    icon.src = "imgWeather/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    icon.src = "imgWeather/mist.png";
  }
};
//pomocí této funkce se vezme hodnota zadaná do okna vyhledávání a uloží ho do proměnné city které se načítá v url adrese.
cityButton.addEventListener("click", () => {
  const city = cityInput.value;
  Weather(city);
});