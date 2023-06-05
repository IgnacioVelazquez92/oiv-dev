const button = document.querySelector(".toggle_btn");

const navbar = document.querySelector(".navbar");

button.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
