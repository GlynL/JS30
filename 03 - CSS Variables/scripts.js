// document.addEventListener("DOMContentLoaded", function() {});

const image = document.querySelector(".image");
const spacing = document.querySelector("#spacing");
const blur = document.querySelector("#blur");
const base = document.querySelector("#base");

setup();

function setup() {
  // setup initial values to style
  image.style.filter = `blur(${blur.value}px)`;
  image.style.border = `${spacing.value}px solid ${base.value}`;

  // event listeners
  spacing.addEventListener(
    "input",
    () => (image.style.borderWidth = spacing.value + "px")
  );

  blur.addEventListener(
    "input",
    () => (image.style.filter = `blur(${blur.value}px)`)
  );

  base.addEventListener("input", () => (image.style.borderColor = base.value));
}
