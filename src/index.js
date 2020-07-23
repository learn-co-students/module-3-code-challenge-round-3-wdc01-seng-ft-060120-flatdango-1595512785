const url = "http://localhost:3000/films"
const filmsDiv = document.querySelector("#films")

document.addEventListener('DOMContentLoaded', () => {

    const ticketNum = document.querySelector('#ticket-num');

    const fetchFirstMovie = () => {
        fetch(url)
        .then(response => response.json())
        .then(movies => renderFirstMovie(movies))
        .catch(error => alert(error));
    }

    const sendPatchRequest = (movie) => {
        const options = {
            method: 'PATCH',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                tickets_sold: movie.tickets_sold + 1
            })
        }

        fetch(`${url}/${movie.id}`, options)
        .then(response => response.json())
        .then(movie => updateTickets(movie))
        .catch(error => alert(error));
    }

    const renderFirstMovie = (movies) => {
        const firstMovie = movies[0];

        const showingDiv = document.querySelector("#showing")
        showingDiv.dataset.movieId = firstMovie.id;

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

        ticketNum.innerText = parseInt(firstMovie.capacity, 10) - firstMovie.tickets_sold;

        addSoldButtonEventListener(firstMovie);
    }

    const updateTickets = (movie) => {
        ticketNum.innerText = parseInt(movie.capacity, 10) - movie.tickets_sold;
    }

    const addSoldButtonEventListener = (movie) => {
        const buyButton = document.querySelector(`.button`);
        buyButton.addEventListener('click', () => {
            sendPatchRequest(movie);

        })
    }

    fetchFirstMovie();
})