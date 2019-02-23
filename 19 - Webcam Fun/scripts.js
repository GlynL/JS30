const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      // video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => console.err("oh noo webcam not working!", err));
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.height = height;
  canvas.width = width;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    // pixels = redEffect(pixels);
    pixels = rgbSplit(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // played sound
  snap.currentTime = 0;
  snap.play();

  //
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="awesome picture" />`;
  strip.insertBefore(link, strip.firstChild);
}

// lazy
// function greenScreen(pixels) {
// return pixels;
// }

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i]; // RED
    pixels.data[i + 100] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 150] = pixels.data[i + 2]; // BLUE
  }
  return pixels;
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = pixels.data[i] + 100; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
    // pixels.data[i+3] ALPHA
  }
  return pixels;
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
