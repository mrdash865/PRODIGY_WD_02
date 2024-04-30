const time = document.getElementById("time");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let intervalId;
let startTime = 0;
let elapsedTime = 0;

start.addEventListener("click", () => {
    if (!intervalId) {
        startTime = new Date();
        intervalId = setInterval(() => {
            elapsedTime = new Date() - startTime;
            time.textContent = formatTime(elapsedTime);
        }, 10);
        start.textContent = "Pause";
    } else {
        clearInterval(intervalId);
        start.textContent = "Resume";
    }
});

stop.addEventListener("click", () => {
    clearInterval(intervalId);
    start.textContent = "Start";
    intervalId = null;
});

reset.addEventListener("click", () => {
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    time.textContent = "00:00:00";
    start.textContent = "Start";
    intervalId = null;
});

function formatTime(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor(ms / (1000 * 60 * 60));

    return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
