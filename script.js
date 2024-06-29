
document.getElementById('toggle_dark_mode').addEventListener('click', toggleDark);

function toggleDark() {
  var element = document.body;
  element.classList.toggle("darkmode");
}
