var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var time = document.querySelector('.time');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var content = document.querySelector('.content');
var body = document.querySelector('body');

async function changeWeatherUI() {
    let captialSearch = search.value.trim();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${captialSearch}&appid=7bf6ffb470dedbdc9a68cb074e6395ea`;
    let data = await fetch(apiUrl).then(res => res.json());

    if (data.cod === 200) {
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + 'm';
        wind.innerText = data.wind.speed + 'm/s';
        sun.innerText = data.main.humidity + '%';
        let temperature = Math.round(data.main.temp - 273.15);
        value.innerText = temperature;
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
        time.innerText = new Date().toLocaleDateString('vi');

        if (temperature <= 15) {
            body.className = 'cold';
        } else if (temperature > 15) {
            body.className = 'warm';
        } else {
            body.className = 'hot';
        }
    } else {
        content.classList.remove('hide');
    }
}

search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        changeWeatherUI();
    }
});

