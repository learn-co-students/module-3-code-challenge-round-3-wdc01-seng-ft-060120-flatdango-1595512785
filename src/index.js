const url = "http://localhost:3000/films/"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")



document.addEventListener("DOMContentLoaded", () => {
    
    const getMovie = () => {

        fetch(url + 1)
        .then(resp => resp.json())
        .then(movie => {
            renderMovie(movie);
        })

    }

    const renderMovie = (movie) => {
        const title = document.getElementById('title')
        title.innerText = movie.title

        const runtime = document.getElementById('runtime')
        runtime.innerText = movie.runtime + " minutes"

        const filmInfo = document.getElementById('film-info')
        filmInfo.innerText = movie.description

        const showtimes = document.getElementById('showtime')
        showtimes.innerText = movie.showtime

        const ticketNumLeft = document.getElementById('ticket-num')
        const movieString = parseInt(movie.capacity, 10)
        ticketNumLeft.innerText = movieString - movie.tickets_sold

        const poster = document.getElementById('poster')
        poster.src = movie.poster

        const buyTicketButton = document.querySelector('.ui.orange.button')
        
        buyTicketButton.addEventListener('click', (event) => {
            event.preventDefault();

            const movieId = movie.id

            // when a ticket button is clicked the tickets_sold attribute is increased by one .
            // have a check where if the tickets sold is <= 0 return 'sold out!'
            console.log(movie)
            // console.log(ticketNumLeft.innerText -= 1)
            // ticketNumLeft.innerText

            const tickets_sold = movie.tickets_sold
            console.log(tickets_sold)

            // updateTicketCount(movieId, body);
        })

    }

    const updateTicketCount = (id, body) => {
        options = {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application.json"
            },
            body: JSON.stringify(body)
        }
        fetch(url + 1, options)
    }


    getMovie();
})