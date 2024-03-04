export {
  imprimir,
  generarCard,
  crearFiltro,
  porGenero,
  porNombre,
  botonesActualizados,
};

function imprimir(listaMovies, elemento, fn) {
  let template = "";
  for (const movie of listaMovies) {
    template += fn(movie);
  }
  elemento.innerHTML = template;
}

function generarCard(movie) {
  return `
        <article class="relative flex flex-wrap flex-col rounded-lg border p-5 text-white w-80 snap-normal justify-between">
        <button data-cardid="${movie.id}" data-fav="botonFavorito" class=" bg-gray-200 text-xl bg-opacity-50 border-2 border-solid border-black absolute rounded right-[-15px] top-[-15px]" type="button" >❤️</button>
        <img class="h-44 rounded-md" src="https://moviestack.onrender.com/static/${movie.image}" alt="Imagen de ${movie.title}">
        <h2 class=" font-bold text-xl w-full">${movie.title}</h2>
        <h3 class="text-gray-500 underline text-xl">${movie.tagline}</h3>
        <p class=" text-gray-500 line-clamp-5 overflow-auto mt-5 text-md font-medium">${movie.overview}</p>
        <a class="mt-2 w-16 h-10 p-2 mx-1 border border-white-700 text-white-700 bg-gray-700 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-150" href="./details.html?id=${movie.id}">Details</a> 
        </article>`;
}

function crearFiltro(movies, elemento) {
  let template = "";
  const genresUnique = movies
    .flatMap((movie) => movie.genres)
    .filter((value, index, arreglo) => arreglo.indexOf(value) === index);

  genresUnique.forEach((genre) => {
    template += `<option value="${genre}">${genre}</option>`;
  });
  elemento.innerHTML =
    `<option value="todos" selected>Genres</option>` + template;
  console.log(genresUnique);
}

function porNombre(listaMovies, title) {
  return listaMovies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  );
}

function porGenero(movies, genre) {
  return movies.filter((movie) => movie.genres.includes(genre));
}

function botonesActualizados(favorites) {
  const botonesFavorito = document.querySelectorAll("[data-fav]");

  botonesFavorito.forEach((boton) => {
    const IdCard = boton.dataset.cardid;
    if (favorites.includes(IdCard)) {
      boton.dataset.fav = "botonLike";
    } else {
      boton.dataset.fav = "botonFavorito";
    }
  });
}
