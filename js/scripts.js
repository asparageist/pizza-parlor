let size = [];
let toppings = [];
let pieCost;
let topsCost;
let sizeCost;

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
  event.preventDefault();
  }
}

function displayOrder() {
  document.getElementById("orderInfo").removeAttribute("class");
  document.querySelector("span#output").innerText = size + " with " + toppings + " costs $" + pieCost;
}

function getPie() {
  getSize();
  getTops();
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
  displayOrder();
}

function getCost() {
  pieCost = parseInt(sizeCost) + parseInt(topsCost);
}

var newPie = {
  pieToppings: [],
  pieSize: []
};