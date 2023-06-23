const button = document.querySelector(".toggle_btn");

const navbar = document.querySelector(".navbar");

button.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const typed = new Typed(".typed", {
  stringsElement: "#cadenas-texto", // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: "|", // Caracter para el cursor
  contentType: "html", // 'html' o 'null' para texto sin formato
});

let Proyectos = {
  cinefilos: {
    imgUrl: "./img/cinefilos.png",
    url: "https://cinefilos-rolling-24i.netlify.app/index.html",
    gitHub: "https://github.com/IgnacioVelazquez92/cinefilos-24i.git",
    title: "Cinefilos",
    description:
      "En este proyecto aplique conocimientos HTML CSS y BOOTSTRAP para maquetar un sitio estático.",
  },

  polaris3d: {
    imgUrl: "./img/polaris3d.png",
    url: "https://polaris-3d.netlify.app/pages/login.html",
    gitHub: "https://github.com/IgnacioVelazquez92/Polaris.git",
    title: "Polaris 3D",
    description:
      "En este proyecto aplique conocimientos JavaScript para crear y loguear usuarios que se guardan en Local Storage",
  },

  amCreaciones: {
    imgUrl: "./img/am-creaciones.png",
    url: "https://am-creaciones.netlify.app/",
    gitHub: "https://github.com/IgnacioVelazquez92/AM-FRONT-PF.git",
    title: "AM-Creaciones",
    description:
      "Ecommerce creado con el stack MERN, Donde se puede realizar un CRUD completo tanto de usuarios como de productos.",
  },
};
