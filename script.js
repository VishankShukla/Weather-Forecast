document.addEventListener('DOMContentLoaded',() => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");
    
    getWeatherBtn.addEventListener('click',() => {
        let city = cityInput.value.trim();
        if(city == ""){
            return;
        } 
    });

    function fetchWeatherData(city){

    }
    function displayWeatherData(weatherData){
        //display

    }
    function showError(){
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden')
    }
});