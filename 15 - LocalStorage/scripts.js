const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
// find current items
const items = JSON.parse(localStorage.getItem("items")) || [];

// looop over current items in storage & add to list
items.forEach(item => {
  const li = document.createElement("li");
  li.innerHTML = `<input type='checkbox' id=${item}><label for='${item}'>${item}</label>`;
  itemsList.appendChild(li);
});

addItems.addEventListener("submit", e => {
  // prevent form submit default
  e.preventDefault();
  // add input value to items array
  const value = e.target.item.value;
  items.push(value);
  // save to localstorage
  window.localStorage.setItem("items", JSON.stringify(items));
  // create li and add to list
  const li = document.createElement("li");
  li.innerHTML = `<input type='checkbox' id='${value}' /><label for='${value}'>${value}</label>`;
  itemsList.appendChild(li);
  // clear input
  e.target.reset();
});
