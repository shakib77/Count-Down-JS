daysEl = document.getElementById('days');
hoursEl = document.getElementById('hours');
minsEl = document.getElementById('mins');
secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2022';

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = ( newYearsDate - currentDate) / 1000;
    const days = Math.floor( totalSeconds / 3600 / 24 );
    const hours = Math.floor( totalSeconds /3600 ) %  24;
    const minutes = Math.floor( totalSeconds / 60 ) % 60;
    const seconds = Math.floor( totalSeconds ) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//Initial Call
countDown();

setInterval(countDown, 1000);
