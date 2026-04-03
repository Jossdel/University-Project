const hero2 = document.querySelector(".hero2");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    hero2.classList.add("visible");
  }
});
