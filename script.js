const API_KEY = "9ae6cea7d1ccbf613827295506769218"
const lat = 54.3520;
const lon = 18.6466;

const FULL_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;


async function getData() {
    await fetch(FULL_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderWeather(data);
        })
        .catch(error => console.log("Error:",error));
}


function renderWeather(weatherData) {
    if(document.querySelector('main')) {
        document.querySelector('main').remove();
    }

    const main = document.createElement("main");
    document.querySelector('body').appendChild(main);

    const cordLatDiv = document.createElement("div");
    cordLatDiv.textContent = `Cord lat: ${weatherData.coord.lat}`;
    main.appendChild(cordLatDiv);

    const cordLonDiv = document.createElement("div");
    cordLonDiv.textContent = `Cord lon: ${weatherData.coord.lon}`;
    main.appendChild(cordLonDiv);

    const countryDiv = document.createElement("div");
    countryDiv.textContent = `Country: ${weatherData.sys.country}`;
    main.appendChild(countryDiv);

    const citiDiv = document.createElement("div");
    citiDiv.textContent = `Citi: ${weatherData.name}`;
    main.appendChild(citiDiv);

    const weatherDiv = document.createElement("div");
    weatherDiv.textContent = `Weather: ${weatherData.weather[0].main}`;
    main.appendChild(weatherDiv);

    const tempDiv = document.createElement("div");
    tempDiv.textContent = `Temp: ${Math.trunc(weatherData.main.temp - 273.15)}°C`;
    main.appendChild(tempDiv);

    const tempFeelsDiv = document.createElement("div");
    tempFeelsDiv.textContent = `Temp feels like: ${Math.trunc(weatherData.main.feels_like - 273.15)}°C`;
    main.appendChild(tempFeelsDiv);

    const pressureDiv = document.createElement("div");
    pressureDiv.textContent = `Pressure: ${weatherData.main.pressure}`;
    main.appendChild(pressureDiv);

    const updateButton = document.createElement("button");
    updateButton.textContent = "Update data";
    main.appendChild(updateButton);

    updateButton.addEventListener("click", getData);
}

getData();