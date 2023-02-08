$(function () {
    var location = $('#searchbar');
    var day1 = $('#day1');
    var day2 = $('#day2');
    var day3 = $('#day3');
    var day4 = $('#day4');
    var day5 = $('#day5')
    var lastSearch = location.value;
    var latitude
    var longitude

    var weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?lat='+ latitude + '&lon=' + longitude +'&appid=2d71f66b3295a7a9148c6748d8cd3964';

    fetch(weatherURL).then(function (response) {
        if (response.ok) {
            response.json().then(function(data) {
              currentWeather(data) ; 
            })
        }
     });

    function currentWeather(data) {
        $('#results').addClass('visible');
        $('#history').append(lastSearch);

    }
})