const API_KEY = "a3174881-e6f1-4a25-ab6b-81dc7251845d";
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

const API_URL_SEARH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword="
getMovies(API_URL_POPULAR)


async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "aplication/json",
            "X-API-KEY": API_KEY,
        },
    });
    const respData = await resp.json()
    showMovies(respData)
}

function getClassByRate(vote) {
    if (vote >= 7) {
        return 'green'
    }
    else if (vote > 5) {
        return 'orange'
    }
    else {
        return 'red'
    }
}


function showMovies(data) {
    const moviesEl = document.querySelector('.movies');

    document.querySelector('.movies').innerHTML = ""

    data.films.forEach(movie => {
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
        <div class="movie-cover-inner">
        <img src="${movie.posterUrlPreview}" alt="${movie.nameRu}" class="movier-cover">
        <div class="movie-cover-darkend"></div>
            </div>
        <div class="movie-info">
        <div class="movie-title">${movie.nameRu}</div>
        <div class="movie-category">${movie.genres.map((genre) => ` ${genre.genre}`)}
        </div>

        ${movie.rating &&
            `
            <div class="movie-average movie-average-${getClassByRate(
                movie.rating
            )}">${movie.rating}</div>
            `
            }
                                  
            </div>        `;
        moviesEl.appendChild(movieEl)
    })
}

const form = document.querySelector('form')
const search = document.querySelector('.header-search')

form.addEventListener('submit', (el) => {
    el.preventDefault();

    const apiSearchUrl = `${API_URL_SEARH}${search.value}`
    if (search.value) {
        getMovies(apiSearchUrl)
    }


    search.value = ""
})
