const url = "http://localhost:3000/films"
const filmsDiv = document.querySelector("#films")

document.addEventListener('DOMContentLoaded', () => {

    const fetchFirstMovie = () => {
        fetch(url)
        .then(response => response.json())
        .then(movies => renderFirstMovie(movies))
        .catch(error => alert(error));
    }

    const sendPatchRequest = (movieId, tickets) => {
        const newTickets = tickets + 1;
        const options = {
            method: 'PATCH',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                tickets_sold: newTickets
            })
        }

        fetch(`${url}/${movieId}`, options)
        .then(response => response.json())
        .then(movie => updateTickets(movie))
        .catch(error => alert(error));
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

        const buyButton = document.querySelector('#buy-button');
        buyButton.dataset.movieId = firstMovie.id;
        buyButton.dataset.tickets = firstMovie.tickets_sold;
    }

    const updateTickets = (movie) => {
        const ticketsRemaining = parseInt(movie.capacity, 10) - movie.tickets_sold;

        const ticketNum = document.querySelector('#ticket-num');
        ticketNum.innerText = ticketsRemaining;

        const buyButton = document.querySelector('#buy-button');
        buyButton.dataset.tickets = movie.tickets_sold;

        if (ticketsRemaining === 0) {
            generateSoldOutButton();
        }
    }

    const generateSoldOutButton = () => {
        const buyButton = document.querySelector('#buy-button');
        buyButton.id = 'sold-out-button';
        buyButton.innerText = 'Sold Out'
    }

    document.addEventListener('click', (event) => {
        if (event.target.id === 'buy-button') {
            const movieId = event.target.dataset.movieId;
            const tickets = parseInt(event.target.dataset.tickets, 10);
            sendPatchRequest(movieId, tickets);
        }
    })

    fetchFirstMovie();
})