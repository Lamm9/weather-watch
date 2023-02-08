$(function () {
    var location = $('#searchbar');
    var monday = $('#monday');
    var tuesday = $('#tuesday');
    var wednesday = $('#wednesday');
    var thursdsay = $('#thursday');
    var friday = $('#friday')
    var saturday = $('#saturday');
    var sunday = $('#sunday');

    var weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?lat={400}&lon={400}&appid={2d71f66b3295a7a9148c6748d8cd3964}';

    fetch(weatherURL);
})