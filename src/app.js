function showCityTemperature(event) {
  event.preventDefault();

  let h1 = document.querySelector("h1");
  let cityName = document.querySelector("#city-name-input").value;

  h1.innerHTML = cityName;

  let apiKey = "c819171fe0abdc14039af4ef5dda283b";

  let units = "metric";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  console.log(response);

  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document
    .querySelector("#icon")
    .setAttribute("alt", response.data.weather[0].description);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCityTemperature);

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#current-day-time");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function showFahrenheit(event) {
  event.preventDefault();
  fahrenheitLink.classList.add("active");
  celsiusLink.classList.remove("active");
  let temperatureElement = document.querySelector("#current-temp");
  let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
}

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", showFahrenheit);

function showCelsius(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", showCelsius);

let celsiusTemperature = null;

function formatDay(timestamp) {
let date = new Date(timestamp * 1000);
let day = date.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
return days[day];
}

function displayForecast (response){
    let forecast = response.data.daily;
    let forecastElement = document.querySelector(#forecast);
    let days = ["Thu", "Fri", "Sat", "Sun"];

    let forecastHTML = `<div class="row">`;
    days.forEach(function (forecastDay) {
        forecastHTML = forecastHTML + 
        `<div class="col-2">
                <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
                <div>
                  <img src="#" alt="Sunny" width="42" />
                </div>
                <div class="weather-forecast-temperatures">
                  <span class="weather-forecast-temperature-max">${forecastDay.temp.max}</span>
                  <span class="weather-forecast-temperature-min">${forecastDay.temp.min}</span>
                </div>
              </div>`
    }
}