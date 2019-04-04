const API_KEY = "fcb455e258ac97e3075c2c6f41bd1739"

function handleFormSubmit(event) {
  //handle submit event
  event.preventDefault()
  const input = document.getElementById('city')
  const city = input.value
  fetchCurrentWeather(city)
  fetchFiveDayForecast(city)
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY + '&units=imperial')
  .then( (data) => {return data.json()} )
  .then( (json) => {displayCurrentWeather(json)} )
  
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  const currentTemp = json.main.temp 
  const tempContainer = document.getElementById('temp')
  tempContainer.innerHTML = json.main.temp
  
  const lowTemp = json.main.temp_min 
  const lowTempContainer = document.getElementById('low')
  lowTempContainer.innerHTML = json.main.temp_min
  
  const highTemp = json.main.temp_max
  const highTempContainer = document.getElementById('high')
  highTempContainer.innerHTML = json.main.temp_max
  
  const humidity = json.main.humidity
  const humidityContainer = document.getElementById('humidity')
  humidityContainer.innerHTML = json.main.humidity
  
  const clouds = json.clouds.all
  const cloudsContainer = document.getElementById('cloudCover')
  cloudsContainer.innerHTML = json.clouds.all
  
  
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + API_KEY + '&units=imperial')
  .then( (data) => {return data.json()} )
  .then( (json) => {displayFiveDayForecast(json)} )

}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
  console.log(json) //we have 39 objects in an array and we want to make a div for each 
  const forecasts = json.list 
  createChart(json)
  let startingString = ''
  for (let forecast of forecasts) {
  let divString = "<div><p>" + forecast.main.temp_min + "</p>" + "<p>" + forecast.main.temp_max + "</p>" + "<p>" + 
  forecast.dt_txt + "</p> </div>"
  startingString += divString
  const aside = document.getElementById('five-day')
  aside.innerHTML = startingString
  
  }
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
  
  const ctx = document.getElementById('WeatherChart').getContext('2d');
  
  const labels = json.list.map((forecast) => {return forecast.dt_txt} )
  
  const temps = json.list.map((forecast) => {return forecast.main.temp} )
  
  new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Temperature',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  
document.addEventListener('submit', handleFormSubmit)
})
