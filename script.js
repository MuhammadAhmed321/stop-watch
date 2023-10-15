let isRunning = false;
let interval;
let startTime = 0;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = startTime || Date.now();
        interval = setInterval(updateDisplay, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    document.getElementById("startStop").textContent = "Start";
    isRunning = false;
    startTime = 0;
    updateDisplay();
}

function updateDisplay() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    
    const minutes = Math.floor((elapsedTime / 60000) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    document.getElementById("minutes").textContent = padZeroes(minutes);
    document.getElementById("seconds").textContent = padZeroes(seconds);
    document.getElementById("milliseconds").textContent = padZeroes(milliseconds);
}

function padZeroes(value) {
    return value.toString().padStart(2, '0');
}

updateDisplay();