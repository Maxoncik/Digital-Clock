var dayDom = document.querySelector('#day');
var hourDom = document.getElementById('hour');
var minuteDom = document.querySelector('#minute');
var ampmDom = document.getElementById('ampm');

function calculatorTime() {
    //console.log('The page has loaded');
    var dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    var date = new Date();
    var dayNumber = date.getDate();
    
    dayDom.textContent = dayNames[dayNames]

    hour = date.getHours();
    hour = hour % 12;
    hour = hour ? hour : 12;
    hour = hour < 10 ? `0${hour}` : hour;
    console.log(hour);
    hourDom.textContent = hour;

    var minute = date.getMinutes();
    hour = minute < 10 ? `0${minute}` : minute;
    minuteDom.textContent = minute
    
    var ampm = hour >=12 ? 'PM' : 'AM';
    ampmDom.textContent = ampm;

    //setTimeout(calculatorTime, 1000);
}

window.addEventListener('load', calculatorTime)