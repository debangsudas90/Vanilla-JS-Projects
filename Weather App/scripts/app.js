//dom manipulation
const cityName = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

//update card details UI
const updateUI = (data) => {
    
    //destructuring
    const { cityInfo, weather } = data; //same as data.weather

    details.innerHTML = `
        <h5 class="my-3">${cityInfo.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
    `;

    //update icon and img
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute("src", iconSrc);

    let timeSrc = weather.IsDayTime ? "img/day.jpeg" : "img/night.svg";
    time.setAttribute("src", timeSrc);

    //remove d-none
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

//get city info
const updateCity = async (city) => {
    const cityInfo = await getCity(city);
    const weather = await getWeather(cityInfo.Key);

    return { cityInfo, weather }; //object shorthand notation
}

cityName.addEventListener('submit', e=> {
    //prevent default action
    e.preventDefault();

    //get city value
    const city = cityName.city.value.trim();
    cityName.reset();
    
    //update city ui
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});