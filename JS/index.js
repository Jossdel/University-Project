window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.7)";
    navbar.style.transition = "0.9s";
  } else {
    navbar.style.background = "rgba(0,0,0,0.7)";
  }
});
