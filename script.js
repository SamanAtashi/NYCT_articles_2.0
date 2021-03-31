var container = document.getElementById("form-container-id");

var btn = document.getElementById("form-btn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  container.style.display = "block";
}

span.onclick = function() {
  container.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == container) {
    container.style.display = "none";
  }
}