const Api_key = '8acacf11b2eaceb4d40300ced0d793c2' //openweathermap.org - API:eric.yu
const City = 'Lima'
const tempUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+City+'&appid='+Api_key+'&units=metric'
const tempElement = document.getElementById('temp');

updateTemp();

function updateTemp() {
    fetch(tempUrl)
        .then(res => res.json())
        .then(res => {tempElement.innerHTML = res["main"]["temp"];
        console.log("Temp: "+res["main"]["temp"]+" °C")}
    );
}



