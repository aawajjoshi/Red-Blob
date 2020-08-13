function changeBG() {
  document.querySelector(".container").classList.toggle("switch-theme");
  document.querySelector(".title").classList.toggle("switch-text-color");
  document.querySelector(".mode-icon").classList.toggle("switch-toggle-icon");
}

const toggle=document.querySelector(".slider");
toggle.addEventListener("click", changeBG);