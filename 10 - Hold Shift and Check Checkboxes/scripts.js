document.addEventListener("DOMContentLoaded", scripts);

function scripts() {
  const boxes = document.querySelectorAll('.inbox input[type="checkbox"]');
  let currentBox = undefined;

  boxes.forEach((box, i) =>
    box.addEventListener("click", boxClicked.bind(null, i))
  );

  function boxClicked(i, e) {
    if (e.shiftKey) {
      addCheckedBoxes(i);
    }
    currentBox = i;
  }

  function addCheckedBoxes(i) {
    if (i > currentBox) {
      while (currentBox <= i) {
        boxes[currentBox].checked = true;
        currentBox++;
      }
    } else if (i < currentBox) {
      while (currentBox >= i) {
        boxes[currentBox].checked = true;
        currentBox--;
      }
    }
  }
}
