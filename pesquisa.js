//script pesquisa //
  const modal = document.getElementById("searchModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");


openModalBtn.onclick = function() {
  modal.style.display = "flex";
}


closeModalBtn.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
