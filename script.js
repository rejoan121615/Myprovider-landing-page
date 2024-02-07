// navbar close and openting code
const navIcon = document.querySelector(".nav-icon");
const closeIcon = document.querySelector(".close-icon");
navIcon.addEventListener("click", function () {
  const navContent = document.querySelector(".navbar-links-wrapper");
  navContent.classList.toggle("active-nav");
  navIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  const navContent = document.querySelector(".navbar-links-wrapper");
  navContent.classList.toggle("active-nav");
  closeIcon.style.display = "none";
  navIcon.style.display = "block";
});


 