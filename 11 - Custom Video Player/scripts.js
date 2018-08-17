const video = document.querySelector(".player__video");
const playBtn = document.querySelector(".toggle");
const sliders = document.querySelectorAll(".player__slider");
const playerBtns = document.querySelectorAll(".player__button");
const videoPosition = document.querySelector(".progress__filled");
// const volumeSlider = [...sliders].filter(slider => slider.name === "volume")[0];
// const speedSplider = [...sliders].filter(
//   slider => slider.name === "playbackRate"
// )[0];

function videoPlay() {
  if (video.paused) {
    video.play();
    playBtn.textContent = "||";
  } else {
    video.pause();
    playBtn.textContent = "►";
  }
}

function adjustVideo() {
  const attribute = this.name;
  video[attribute] = this.value;
}

function skipVideo() {
  const timeChange = Number(this.dataset.skip);
  video.currentTime += timeChange;
}

function handleClick() {
  if (this.title === "Toggle Play") videoPlay();
  if (this.dataset.skip) skipVideo.call(this);
}

function updateProgess() {
  videoPosition.style.flexBasis = `${(video.currentTime / video.duration) *
    100}%`;
}

playerBtns.forEach(btn => btn.addEventListener("click", handleClick));
video.addEventListener("click", videoPlay);

sliders.forEach(slider => slider.addEventListener("input", adjustVideo));

video.addEventListener("timeupdate", updateProgess);
