const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const mintuesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const newYears = '10 Aug 2023'

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date()
    const timeLeft = newYearsDate - currentDate

    const totalSeconds = Math.floor(timeLeft / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60)

    daysEl.textContent = days
    hoursEl.textContent = hours
    mintuesEl.textContent = minutes
    secondsEl.textContent = seconds
}

setInterval(countdown, 1000);