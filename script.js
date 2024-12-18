function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Testing Copyright Date auto update
// let date = new Date();
document.getElementById('year').innerHTML = new Date().getFullYear();