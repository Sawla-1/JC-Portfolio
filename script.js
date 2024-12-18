function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Testing Copyright Date auto update
// let date = new Date();
document.getElementById('year').innerHTML = new Date().getFullYear();

// nav bar scroll disappear
// Hide or show the navbar on scroll
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  const desktopNav = document.getElementById("desktop-nav");
  const hamburgerNav = document.getElementById("hamburger-nav");

    // Show or hide navbar
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("desktop-nav").style.top = "0";
    document.getElementById("hamburger-nav").style.top = "0";
  } else {
    document.getElementById("desktop-nav").style.top = "-110px";
    document.getElementById("hamburger-nav").style.top = "-110px";
  }

  // Change background color when scrolling
  if (currentScrollPos > 180) {
    desktopNav.style.backgroundColor = "white"; // Darker background when scrolling
    hamburgerNav.style.backgroundColor = "white"; // Darker background when scrolling
  } else {
    desktopNav.style.backgroundColor = "transparent"; // Original background at the top
    hamburgerNav.style.backgroundColor = "transparent"; // Original background at the top
  }

  prevScrollpos = currentScrollPos;
};
