import {
  imprimir,
  generarCard,
  botonesActualizados,
} from "./module/funciones.js";

const divContenedor = document.createElement("div");
divContenedor.id = "contenedor";
divContenedor.classList =
  "flex flex-row justify-evenly flex-wrap gap-4 mb-24 mt-8";
document.querySelector("main").appendChild(divContenedor);

const url = `https://moviestack.onrender.com/api/movies`;
const init = {
  method: "GET",
  headers: {
    "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd",
  },
};

let movies = [];
fetch(url, init)
  .then((response) => response.json())
  .then((data) => {
    movies = data.movies;
    const moviesFav = movies.filter((movie) => favoritos.includes(movie.id));
    imprimir(moviesFav, divContenedor, generarCard);
    botonesActualizados(favoritos);
  })
  .catch((err) => console.log(`error`, err));

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
let divContenedor = document.getElementById(`contenedor`);
divContenedor.addEventListener(`click`, (e) => {
  const movie = e.target;
  const cardId = movie.dataset.cardId;

  if (favoritos.includes(cardId)) {
    favoritos = favoritos.filter((fav) => fav !== cardId);
    movie.dataset.fav = `botonFavorito`;
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  const moviesFav = movies.filter((movie) => favoritos.includes(movie.id));
  imprimir(moviesFav, divContenedor, generarCard);
  actualizarBotones(favoritos);
});
