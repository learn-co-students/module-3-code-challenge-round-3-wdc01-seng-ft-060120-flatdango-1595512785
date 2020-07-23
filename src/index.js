const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener("DOMContentLoaded", () => {
    fetchMovies()
    document.addEventListener("click", (e) => {
        console.log(e.target.parentNode)
    })
});

function fetchMovies() {
    fetch(url)
    .then(response => response.json())
    .then(movies => renderAllMovies(movies))
};

function renderAllMovies(movies) {
    movies.forEach(movie => renderMovie(movie))
};

function renderMovie(movie) {
    //render poster
    let posterImg = document.getElementById("poster")
    posterImg.src = movie.poster
    //render title
    let movieTitle = document.getElementById("title")
    movieTitle.textContent = movie.title
    //render runtime
    let movieRuntime = document.getElementById("runtime")
    movieRuntime.textContent = `${movie.runtime} minutes`
    //render description
    let movieDescr = document.getElementById("film-info")
    movieDescr.textContent = movie.description
    //render showtime
    let movieShowtime = document.getElementById("showtime")
    movieShowtime.textContent = movie.showtime
    //render available tickets
    let movieTicketsAvailable = document.getElementById("ticket-num")
    movieTicketsAvailable.textContent = `${parseInt(movie.capacity) - movie.tickets_sold} remaining tickets`
}