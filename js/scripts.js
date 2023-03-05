let size = [];
let toppings = [];
let pieCost;
let topsCost;
let sizeCost;

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
  if (size === "solo") {
    sizeCost = 10;
  } else if (size === "duo") {
    sizeCost = 15;
  } else if (size === "raiding party") {
    sizeCost = 30;
  }
  console.log(sizeCost);
}

function getTops() {
  toppings = [];
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  let topsPrice = 2 * (checkboxes.length);
  for (let i = 0; i < checkboxes.length; i++) {
    toppings.push(checkboxes[i].name)
  }
  newPie.pieToppings.push(toppings);
  topsCost = (checkboxes.length * 2);
  getCost();
}

function getCost() {
  pieCost = parseInt(sizeCost) + parseInt(topsCost);
  console.log(pieCost);
}

var newPie = {
  pieToppings: [],
  pieSize: []
};