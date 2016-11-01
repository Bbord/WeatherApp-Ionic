angular.module('weather')

.constant('OpenWeatherConfig', {
   searchUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',
   units: '&units=metric',
   appid: '&appid=edbd882be3dde6ee71e8000b6602697a',
   imgUrl: 'http://openweathermap.org/img/w/' 
})