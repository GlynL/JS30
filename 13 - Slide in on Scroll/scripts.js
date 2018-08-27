function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll("img");

// https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= -el.height &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        rect.height &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkImages(e) {
  images.forEach(image => {
    const check = isElementInViewport(image);
    if (check) image.classList.add("active");
    else image.classList.remove("active");
  });
}

window.addEventListener("scroll", debounce(checkImages));
