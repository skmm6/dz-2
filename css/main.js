const hoursHand = document.querySelector('.clock-h')
const minutesHand = document.querySelector('.clock-m')
const secondsHand = document.querySelector('.clock-s')
const dayHand = document.querySelector('.clock-day')
const monthHand = document.querySelector('.clock-month')

function clock() {
    let now = new Date()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()
    let day = now.getDate()
    let mon = now.getMonth()

    let sAngle = s * 6
    let mAngle = m * 6 + s / 10
    let hAngle = h * 30 + m / 2
    mon = mon + 1


    day = (day < 10) ? '0' + day + '.' : day
    mon = (mon < 10) ? '0' + mon : mon

    secondsHand.style.transform = `rotate(${sAngle}deg)`
    minutesHand.style.transform = `rotate(${mAngle}deg)`
    hoursHand.style.transform = `rotate(${hAngle}deg)`

    dayHand.innerHTML = (day)
    monthHand.innerHTML = (mon)

    setTimeout(clock, 500)
}

clock()
