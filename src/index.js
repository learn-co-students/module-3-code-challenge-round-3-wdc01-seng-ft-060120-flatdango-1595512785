const url = "http://localhost:3000/films"
const filmsDiv = document.querySelector("#films")
const showingDiv = document.querySelector("#showing")

document.addEventListener('DOMContentLoaded', () => {

    const fetchFirstMovie = () => {
        fetch(url)
        .then(response => response.json())
        .then(movies => renderFirstMovie(movies))
    }

    const renderFirstMovie = (movies) => {
        const firstMovie = movies[0];

        const poster = document.querySelector("#poster")
        poster.src = firstMovie.poster;

        const title = document.querySelector('#title');
        title.innerText = firstMovie.title;

        const runTime = document.querySelector('#runtime');
        runTime.innerText = `${firstMovie.runtime} minutes`;

        const filmInfo = document.querySelector('#film-info');
        filmInfo.innerText = firstMovie.description;

        const showtime = document.querySelector('#showtime');
        showtime.innerText = firstMovie.showtime;

        const ticketNum = document.querySelector('#ticket-num');
        ticketNum.innerText = parseInt(firstMovie.capacity, 10) - firstMovie.tickets_sold;
    }

    fetchFirstMovie();
})