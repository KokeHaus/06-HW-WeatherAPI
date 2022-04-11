var userFormEl = document.querySelector('#user-form');
var suggestlist = document.querySelector('#suggest');
var nameInputEl = document.querySelector('#username');
var repoContainerEl = document.querySelector('#repos-container');
var cityTitle = document.querySelector('#weathertitle');
var cityTemp = document.querySelector('#temp');
var cityWind = document.querySelector('#wind');
var cityHumidity = document.querySelector('#humidity');
var cityUvi = document.querySelector('#uvi');
var titleicon = document.querySelector('#titleicon');
var cityTemp1 = document.querySelector('#dayonetemp');
var cityWind1 = document.querySelector('#dayonewind');
var cityHumidity1 = document.querySelector('#dayonehumidity');
var cityDate1=document.querySelector('#dayonedate');
var icon1 = document.querySelector('#icon1');

var cityTemp2 = document.querySelector('#daytwotemp');
var cityWind2 = document.querySelector('#daytwowind');
var cityHumidity2 = document.querySelector('#daytwohumidity');
var cityDate2=document.querySelector('#daytwodate');
var icon2 = document.querySelector('#icon2');

var cityTemp3 = document.querySelector('#daythreetemp');
var cityWind3 = document.querySelector('#daythreewind');
var cityHumidity3 = document.querySelector('#daythreehumidity');
var cityDate3=document.querySelector('#daythreedate');
var icon3 = document.querySelector('#icon3');

var cityTemp4 = document.querySelector('#dayfourtemp');
var cityWind4 = document.querySelector('#dayfourwind');
var cityHumidity4 = document.querySelector('#dayfourhumidity');
var cityDate4=document.querySelector('#dayfourdate');
var icon4 = document.querySelector('#icon4');

var cityTemp5 = document.querySelector('#dayfivetemp');
var cityWind5 = document.querySelector('#dayfivewind');
var cityHumidity5 = document.querySelector('#dayfivehumidity');
var cityDate5=document.querySelector('#dayfivedate');
var icon5 = document.querySelector('#icon5');


var formSubmitHandler = function (event) {
  event.preventDefault();

  var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);

    repoContainerEl.textContent = '';
    nameInputEl.value = '';
  } else {
    alert('Please enter a city');
  }
};

var buttonClickHandler = function (event) {
  event.preventDefault();
  var city = event.target.getAttribute('city');
  console.log('clicked')

  if (city) {
    getFeaturedCities(city);

  }
};

var getUserRepos = function (city) {
  var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=bbe9162fb9625e7baee31b65a34dc9d8&units=metric'
  var api = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=bbe9162fb9625e7baee31b65a34dc9d8&units=metric'
  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayWeather(data, city);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to weather api');
    });
    

    fetch(api)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayForecast(data, city);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to weather api');
    });
};


var getFeaturedCities = function (city) {
  var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=bbe9162fb9625e7baee31b65a34dc9d8&units=metric'
  var api = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=bbe9162fb9625e7baee31b65a34dc9d8&units=metric'
  fetch(apiUrl).then((response)=>(response.json()).then(data=>({
      data:data,
  })
  ));
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayWeather(data, city);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  });
  fetch(apiUrl).then((response)=>(response.json()).then(data=>({
    data:data,
})
));
fetch(api).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      displayForecast(data, city);
    });
  } else {
    alert('Error: ' + response.statusText);
  }
});
fetch(api).then((response)=>(response.json()).then(data=>({
  data:data,
})
));
};

var displayWeather = function (data, city) {
  
  const temp = data.main.temp;
  const place =city;
   const humidity = data.main.humidity;
   const wind = data.wind.speed;
   const feelslike = data.main.feels_like;
   const icon = data.weather[0].icon
   titleicon.src='http://openweathermap.org/img/w/' + icon + '.png';
   

 
  cityTitle.textContent= place;
  cityTitle.appendChild(titleicon);
  cityTemp.textContent = 'Temp: ' + temp + 'C';
  cityWind.textContent='Wind: ' + wind + 'km/h';
  cityHumidity.textContent='Humidity: ' + humidity + '%';
  cityUvi.textContent='Feels Like: ' + feelslike + 'C';


};

var displayForecast = function(data,city){
var date = moment().format('MM/DD/YYYY');
let daytwo  = moment().add(1,'days').format('MM/DD/YYYY');
let daythree  = moment().add(2,'days').format('MM/DD/YYYY');
let dayfour  = moment().add(3,'days').format('MM/DD/YYYY');
let dayfive  = moment().add(4,'days').format('MM/DD/YYYY');
const icon = data.list[0].weather[0].icon
icon1.src='http://openweathermap.org/img/w/' + icon + '.png';
icon2.src='http://openweathermap.org/img/w/' + data.list[8].weather[0].icon + '.png';
icon3.src='http://openweathermap.org/img/w/' + data.list[16].weather[0].icon + '.png';
icon4.src='http://openweathermap.org/img/w/' + data.list[24].weather[0].icon + '.png';
icon5.src='http://openweathermap.org/img/w/' + data.list[32].weather[0].icon + '.png';

const temp1 = data.list[0].main.temp;
const wind1 = data.list[0].wind.speed;
const humidity1 = data.list[0].main.humidity;
cityDate1.textContent=date;
cityDate1.appendChild(icon1);
cityTemp1.textContent= 'Temp: ' + temp1 + 'C';
cityWind1.textContent='Wind: ' + wind1 + 'km/h';
cityHumidity1.textContent='Humidity: ' + humidity1 + '%';


const temp2 = data.list[8].main.temp;
const wind2 = data.list[8].wind.speed;
const humidity2 = data.list[8].main.humidity;
cityDate2.textContent=daytwo;
cityDate2.appendChild(icon2);
cityTemp2.textContent= 'Temp: ' + temp2 + 'C';
cityWind2.textContent='Wind: ' + wind2 + 'km/h';
cityHumidity2.textContent='Humidity: ' + humidity2 + '%';

const temp3 = data.list[16].main.temp;
const wind3 = data.list[16].wind.speed;
const humidity3 = data.list[16].main.humidity;
cityDate3.textContent=daythree;
cityDate3.appendChild(icon3);
cityTemp3.textContent= 'Temp: ' + temp3 + 'C';
cityWind3.textContent='Wind: ' + wind3 + 'km/h';
cityHumidity3.textContent='Humidity: ' + humidity3 + '%';


const temp4 = data.list[24].main.temp;
const wind4 = data.list[24].wind.speed;
const humidity4 = data.list[24].main.humidity;
cityDate4.textContent=dayfour;
cityDate4.appendChild(icon4);
cityTemp4.textContent= 'Temp: ' + temp4 + 'C';
cityWind4.textContent='Wind: ' + wind4 + 'km/h';
cityHumidity4.textContent='Humidity: ' + humidity4 + '%';


const temp5 = data.list[32].main.temp;
const wind5 = data.list[32].wind.speed;
const humidity5 = data.list[32].main.humidity;
cityDate5.textContent=dayfive;
cityDate5.appendChild(icon5);
cityTemp5.textContent= 'Temp: ' + temp5 + 'C';
cityWind5.textContent='Wind: ' + wind5 + 'km/h';
cityHumidity5.textContent='Humidity: ' + humidity5 + '%';





}

userFormEl.addEventListener('submit', formSubmitHandler);
suggestlist.addEventListener('click', buttonClickHandler);
