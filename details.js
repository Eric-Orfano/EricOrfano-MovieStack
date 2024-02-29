const urlParams = new URLSearchParams (location.search)
const id = urlParams.get('id')

const url = `https://moviestack.onrender.com/api/movies`
const init = {
    method: "GET",
    headers: {
        "x-api-key" : "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}


fetch(url, init)
    .then (response => response.json())
    .then ((data) => {
        movies = data.movies
        const movieFind = movies.find( movie => movie.id == id)
        const $main = document.getElementById(`main`)
        $main.innerHTML = `
    <div class="flex flex-col items-center py-10 text-white-style">
        <article class="flex flex-wrap justify-center mt-16">

            <img class="rounded-md h-100 border-2 border-black" src="https://moviestack.onrender.com/static/${movieFind.image}" alt="Imagen de ${movieFind.title}">
            
            <div class="w-1/2 flex flex-col m-auto lg:m-[0] gap-4 p-3">

                <h2 class="text-xl pb-2 text-red-500">${movieFind.title}</h2>

                <h3 class="text-gray-500 pb-1 underline text-xl font-small">${movieFind.tagline}</h3>
                
                <p class="text-gray-500 text-lg">${movieFind.overview}</p>
            <div> 

        </article>

        <div class="flex flex-col items-center md:items-start md:flex-row gap-64 py-10 text-xl">
            <table class="border border-solid text-white w-80 h-56 bg-gray-800">
                <tbody>
                    <tr>
                        <td class="p-1 border border-solid text-white">Original Language</td>
                        <td class="p-1 border border-solid text-white">${movieFind.original_language}</td>
                    </tr>
                    <tr>
                        <td class="p-1 border border-solid text-white">Release Date</td>
                        <td class="p-1 border border-solid text-white">${movieFind.release_date}</td>
                    </tr>
                    <tr>
                        <td class="p-1 border border-solid text-white">Runtime</td>
                        <td class="p-1 border border-solid text-white">${movieFind.runtime}</td>
                    </tr>
                    <tr>
                        <td class="p-1 border border-solid text-white">Status</td>
                        <td class="p-1 border border-solid text-white">${movieFind.status}</td>
                    </tr>
                </tbody>
            </table>
            <table class="border border-solid text-white w-80 h-40 bg-gray-800">
                <tbody>
                    <tr>
                        <td class="p-1 border border-solid text-white">Vote Average</td>
                        <td class="p-1 border border-solid text-white">${movieFind.vote_average}</td>
                    </tr>
                    <tr>
                        <td class="p-1 border border-solid text-white">Budget</td>
                        <td class="p-1 border border-solid text-white">${movieFind.budget.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td class="p-1 border border-solid text-white">Revenue</td>
                        <td class="p-1 border border-solid text-white">${movieFind.revenue.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
    }
    )







