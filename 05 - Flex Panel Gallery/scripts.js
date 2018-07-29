const panels = document.querySelector(".panels");
const allPanels = document.querySelectorAll(".panel");

panels.style.display = "flex";
panels.style.flexDirection = "row";

allPanels.forEach(panel => {
  panel.style.flex = "1 1 0";
  panel.style.display = "flex";
  panel.style.justifyContent = "center";
  panel.style.flexDirection = "column";
  panel.addEventListener("click", adjustSize);
});

function adjustSize(e) {
  console.log(e.currentTarget);
  this.classList.toggle("open");
  this.children[0].style.transform = "translateY(-50vh)";
  this.children[0].style.visibility = "visible";
  this.children[0].style.transform = "translateY(0)";
  this.children[2].style.transform = "translateY(50vh)";
  this.children[2].style.visibility = "visible";
  this.children[2].style.transform = "translateY(0)";
}
