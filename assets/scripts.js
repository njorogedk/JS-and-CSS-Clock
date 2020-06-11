const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.sec-hand');
const date = document.querySelector('.date');
const clock = document.querySelector('.clock');


function setDate() {
    const today = new Date();

    const second = today.getSeconds();
    const secondDegrees = ((second / 60) * 360) + 360;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;



    const minute = today.getMinutes();
    const minuteDegrees = ((minute / 60) * 360);
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hour = today.getHours();
    const hourDegrees = ((hour / 12) * 360);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = weekDay[today.getDay()];
    const currentDate = today.getDate();

    date.innerHTML = '<span>' + '<strong>' + day + ' ' + currentDate + '</strong>' + '</span>';

}

setInterval(setDate, 1000);

setDate();