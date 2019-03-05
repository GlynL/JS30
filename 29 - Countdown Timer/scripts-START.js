const btns = document.querySelectorAll(".timer__button");
const customTime = document.querySelector("#custom");

const timer = document.querySelector(".display");
const timeLeft = timer.querySelector(".display__time-left");
const timeEnd = timer.querySelector(".display__end-time");

let time, active;

const interval = setInterval(() => {
  if (active) {
    time--;
    setTime();
    if (time === 0) {
      clearInterval(interval);
      active = false;
    }
  }
}, 1000);

function setTime() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  timeLeft.textContent = `${minutes}:${seconds}`;
}

function setEnd() {
  const now = new Date();
  let hours = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();
  secs = secs + time;
  if (secs >= 60) {
    mins = mins + Math.floor(secs / 60);
    secs = secs % 60;
    if (secs < 10) secs = `0${secs}`;
  }
  if (mins >= 60) {
    hours = hours + Math.floor(mins / 60);
    mins = mins % 60;
    if (mins < 10) mins = `0${mins}`;
  }
  timeEnd.textContent = `${hours}:${mins}:${secs}`;
}

function startTimer(e) {
  if (e.type === "submit") e.preventDefault();
  time = Number(this.dataset.time || this.children.minutes.value * 60);
  setEnd();
  setTime();
  active = true;
}

customTime.addEventListener("submit", startTimer);

btns.forEach(btn => {
  btn.addEventListener("click", startTimer);
});
