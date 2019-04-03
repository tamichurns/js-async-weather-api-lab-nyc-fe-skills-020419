const API_KEY = "fcb455e258ac97e3075c2c6f41bd1739"

function handleFormSubmit(event) {
  //handle submit event
  event.preventDefault()
  console.log('YOO HOOO')
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  
document.addEventListener('submit', handleFormSubmit)
})
