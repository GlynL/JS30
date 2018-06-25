document.addEventListener("DOMContentLoaded", function() {
  const hourHand = document.querySelector(".hour-hand");
  const minHand = document.querySelector(".min-hand");
  const secHand = document.querySelector(".second-hand");

  handleTime();

  function handleTime() {
    let time = Date.now();
    let date = new Date(time);
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let hoursRotate = hours * 30;
    let minsRotate = mins * 6;
    let secsRotate = secs * 6;

    hourHand.style.transform = `rotate(${hoursRotate}deg)`;
    minHand.style.transform = `rotate(${minsRotate}deg)`;
    secHand.style.transform = `rotate(${secsRotate}deg)`;
  }

  setInterval(handleTime, 1000);
});
