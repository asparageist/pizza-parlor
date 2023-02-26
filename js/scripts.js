
let size = "";
let toppings = [];

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
  event.preventDefault();
  }
  hideOrder();
  orderPie();
}

function hideOrder() {
  document.getElementById("pieList").setAttribute("class", "hidden");
}

function orderPie() {
  document.getElementById("getPie").addEventListener("click", getPies());
  size = document.getElementById("size").value;
}

function getPies() {
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  console.log(checkboxes);
  toppings = [];
  for (let i = 0; i < checkboxes.length; i++) {
    toppings.push(checkboxes[i].value)
  }
  console.log(toppings);
}

function newPie(pieSize, pieTops) {
  this.size = pieSize;
  this.tops = pieTops;
}