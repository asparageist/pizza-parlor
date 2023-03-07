let size = [];
let toppings = [];
let pieCost;
let topsCost;
let sizeCost;
let orderedPie;

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
  event.preventDefault();
  }
}

function displayOrder() {
  orderedPie = new NewPie(size, toppings);
  document.getElementById("orderInfo").removeAttribute("class");
  document.querySelector("span#output").innerText = orderedPie.costString();
}

function getPie() {
  getSize();
  getTops();
}

function getSize() {
  size = document.getElementById("size").value;
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
  for (let i = 0; i < checkboxes.length; i++) {
    toppings.push(checkboxes[i].name)
  }
  topsCost = (checkboxes.length * 2);
  getCost();
  displayOrder();
}

function getCost() {
  pieCost = parseInt(sizeCost) + parseInt(topsCost);
}

function NewPie(pieSize, pieToppings) {
  this.pieToppings = pieToppings;
  this.pieSize = pieSize;
};

NewPie.prototype.costString = function() {
  return this.pieSize + " with " + this.pieToppings + " costs $" + pieCost;
}