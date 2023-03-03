let size = [];
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

function getPie() {
  getSize();
  getTops();
  console.log(newPie);
}

function getSize() {
  size = document.getElementById("size").value;
  newPie.pieSize.push(size);
}

function getTops() {
  toppings = [];
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  let topsPrice = 2 * (checkboxes.length);
  for (let i = 0; i < checkboxes.length; i++) {
    toppings.push(checkboxes[i].name)
  }
  newPie.pieToppings.push(toppings);
}

var newPie = {
  pieToppings: [],
  pieSize: []
};