const time = +prompt('Input time in seconds:');
const timer = document.querySelector('.timer');

function parseTime(seconds) {
    if (isNaN(seconds)) return;

    const interval = setInterval(() => {
        if (seconds > 0) {
            const result = calculateTime(seconds);
            seconds -= 1;

            timer.textContent = `${result.minutes}:${result.seconds}`;
        } else {
            clearInterval(interval);
            timer.textContent = '0:0';
        }
    }, 1000)
}

function calculateTime(seconds) {
    return {
        minutes: Math.floor(seconds / 60),
        seconds: seconds % 60
    };
}

parseTime(time);