let size = "";
let toppings = [];

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
  event.preventDefault();
  }
  hideOrder();
}

function hideOrder() {
  document.getElementById("pieList").setAttribute("class", "hidden");
}

function getSize() {
  size = document.getElementById("size").value;
  console.log(size);
}

function getTops() {
  toppings = [];
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  console.log(checkboxes.length);
  for (let i = 0; i < checkboxes.length; i++) {
    toppings.push(checkboxes[i].value)
  }
  console.log(toppings);
}

function newPie(pieSize, pieTops) {
  this.size = pieSize;
  this.tops = pieTops;
}