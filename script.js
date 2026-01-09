
  function openModal() {
    document.getElementById("menu-princi").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("menu-princi").style.display = "none";
  }

  window.onclick = function(event) {
    let modal = document.getElementById("menu-princi");
    if (event.target == modal) {
      closeModal();
    }
  }

  function selectLanguage(element) {
    document.querySelectorAll('.option, .option1').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
  }



