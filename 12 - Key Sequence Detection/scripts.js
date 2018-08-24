let combo = [];
const secret = "glyniscool";

window.addEventListener("keyup", e => {
  if (combo.length >= 10) combo.shift();
  combo.push(e.key);
  if (combo.join("") === secret) {
    cornify_add();
    console.log("hurrahhh!!!");
  }
  console.log(combo);
});
