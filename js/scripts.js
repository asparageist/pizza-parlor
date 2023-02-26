window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();

    function newPie(pieSize, pieTops) {
      this.size = pieSize;
      this.tops = pieTops;
    }

  }
}
