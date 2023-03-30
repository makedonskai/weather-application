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
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCityTemperature);
