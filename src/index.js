const base_url = "http://localhost:3000/films/"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener('DOMContentLoaded', start)

const fetchMovie = (filmID = 1) => {
    fetch(`${base_url}/${filmID}`)
    .then(resp => resp.json())
    .then(movie => renderMovie(movie))
    .catch(error => console.log(error))
}

const renderMovie = (movie) => {
    let poster = document.querySelector('img#poster');
    poster.src = `${movie.poster}`;

    document.querySelector('#title').textContent = movie.title;
    document.querySelector('#runtime').textContent = `${movie.runtime}` + " minutes";
    document.querySelector('#showtime').textContent = movie.showtime;
    document.querySelector('#film-info').textContent = movie.description;

    document.querySelector('#ticket-num').textContent = parseInt(movie.capacity - `${movie.tickets_sold}`);

}

function start(){
    fetchMovie();
}