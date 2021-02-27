let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let inps = document.getElementById('inps')

let values = [
    'mukesh', 'rahul', 'anil', 'bharat', 'aadarsh', 'harish', 'khushbu', 'priyanka', 'krishna', 'pintu', 'janu', 'manshi', 'shivani'
]

function getRandomValue() {
    return values[Math.floor(Math.random() * 12)]
}
let animationId;

function updateAnimation(newspeed) {
    if (animationId) clearInterval(animationId)
    animationId = setInterval(() => {
        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    }, 1000 / newspeed)
}
inps.onchange = function(ev) {
    console.log('change')
    document.documentElement.style.setProperty('--speed', ev.target.value)
    updateAnimation(ev.target.value)
}