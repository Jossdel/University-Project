const hero2 = document.querySelector(".hero2");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    hero2.classList.add("visible");
  }
});
const carritoIcon = document.querySelector(".carrito");
const panel = document.getElementById("carritoPanel");

carritoIcon.addEventListener("click", () => {
  panel.classList.toggle("activo");
});
document.addEventListener("click", (e) => {
  if (e.target.id === "btn-cancelar") {
    panel.classList.remove("activo");
  }
});
