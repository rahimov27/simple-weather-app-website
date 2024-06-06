


// Time part
const timeDisplay = document.getElementById("time");
        function getTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        const formattedHours = hours < 10 ? '0' + hours : hours;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        
        const timeString = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
        
        timeDisplay.innerHTML =  `Time in Berlin ${timeString}`;
        // console.log(timeString);
    }
    
    setInterval(getTime, 1000);


// Working with API


const APIkey = "e4c7d413beed7d8cc6521ae67ca4d8f0"

async function fetchData(){
    const input = document.getElementById("search-input").value;
    try{
        // Response for weahter API
        const response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${input}&appid=${APIkey}&units=metric`);

        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data =  await response.json();

        // City
        const cityName = data.list[0]['name'];
        const countryCode = data.list[0].sys.country;
        const cityDisplay = document.getElementById("city-name").textContent = `${cityName} ${countryCode}`;

        // Temperature
        const temp = data.list[0].main.temp;
        const tempDisplay = document.getElementById("temp").textContent = temp;

        // Temperature min
        const tempMin = data.list[0].main.temp_min;
        const tempMinDisplay = document.getElementById("temp_min").textContent = tempMin;

        // Temperature max
        const tempMax = data.list[0].main.temp_max;
        const tempMaxDisplay = document.getElementById("temp_max").textContent = tempMax;

        // Feels like 
        const feelsLike = data.list[0].main.feels_like;
        const feelsDisplay = document.getElementById("feels-like").textContent = `Feel's like ${feelsLike}`;

        // Speed wind 
        const speedWind = data.list[0].wind.speed;
        const speedWindDisplay = document.getElementById("speed-wind").textContent = speedWind;

        // Pressure
        const pressure = data.list[0].main.pressure;
        const pressureDisplay = document.getElementById("pressure").textContent = pressure;

        // Humidity
        const humidity = data.list[0].main.humidity;
        const humidityDisplay = document.getElementById("humidity").textContent = humidity;
        
        // Rain
        const rain = data.list[0].rain["1h"];
        const rainDisplay = document.getElementById("rain").textContent = rain;

        // Weather 
        const weather = data.list[0].weather["description"];
        const weatherDisplay =  document.getElementById("weather").textContent = weather;


    } 
    catch(error){
        console.log("Error", error);
    }

   
}

fetchData();


