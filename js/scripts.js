console.log("dsagj");

document.getElementById("getPie").addEventListener("click", getPies);

let size;
function hidePies() {
document.getElementById("pieList").setAttribute("class", "hidden");
}

function getPies() {
console.log("bbkhgkhg");
size = document.getElementById("size").value;
  let toppings = [];
  let checkboxes = document.querySelectorAll("input[type='checkbox]:checked");
  for (let i = 0; i < checkboxes.length; i++) {
    toppings.push(checkboxes[i].value)
  }
}

function newPie(pieSize, pieTops) {
  this.size = pieSize;
  this.tops = pieTops;
}
console.log("DKFJ");
getPies();
hidePies();
