import {
  imprimir,
  crearFiltro,
  generarCard,
  porGenero,
  porNombre,
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
    imprimir(movies, divContenedor, generarCard);
    crearFiltro(movies, select);
  })
  .catch((err) => console.log(`error`, err));

input.addEventListener(`input`, () => {
  const tituloFiltro = porNombre(movies, input.value);
  const peliculaFiltro = porGenero(tituloFiltro, select.value);
  if (select.value === "todos") {
    imprimir(tituloFiltro, divContenedor, generarCard);
  } else {
    imprimir(peliculaFiltro, divContenedor, generarCard);
  }
});

select.addEventListener("change", () => {
  const tituloFiltro = porNombre(movies, input.value);
  const peliculaFiltro = porGenero(tituloFiltro, select.value);
  if (select.value === "todos") {
    imprimir(tituloFiltro, divContenedor, generarCard);
  } else {
    imprimir(peliculaFiltro, divContenedor, generarCard);
  }
});
