const url = "http://localhost:3000/films/"
const firstFilmUrl = url + 1
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")



document.addEventListener("DOMContentLoaded", () => {
    
    const getMovie = () => {

        fetch(firstFilmUrl)
        .then(resp => resp.json())
        .then(movie => {
            const ticketSpan = document.getElementById('ticket-num')
            renderMovie(movie, ticketSpan);
        })

    }

    const listOfMovies = () => {
        fetch(url)
        .then(resp => resp.json())
        .then(movieList => {
            // console.log(movieList)
            renderMovieTitles(movieList)
        })
    }

    const renderMovieTitles = (movieArray) => {
        movieArray.forEach(movie => renderMovieTitle(movie))
    }

    const renderMovieTitle = (movie) => {
        // render movie titles to the left of the page
        const movieTitleList = document.querySelector('.film.item')
        const movieTitleName = document.createElement('div')
        movieTitleName.innerText = movie.title
        movieTitleList.appendChild(movieTitleName)
    }

    const renderMovie = (movie,ticketSpan) => {
        ticketSpan.innerText = ''

        const title = document.getElementById('title')
        title.innerText = movie.title

        const runtime = document.getElementById('runtime')
        runtime.innerText = movie.runtime + " minutes"

        const filmInfo = document.getElementById('film-info')
        filmInfo.innerText = movie.description

        const showtimes = document.getElementById('showtime')
        showtimes.innerText = movie.showtime

        const movieString = parseInt(movie.capacity, 10)
        ticketSpan.innerText = movieString - movie.tickets_sold

        const poster = document.getElementById('poster')
        poster.src = movie.poster

        const buyTicketButton = document.querySelector('.ui.orange.button')
        
        buyTicketButton.addEventListener('click', (event) => {
            event.preventDefault();
            const movieId = movie.id
            
            if (ticketSpan.innerText <= 0){
                alert("Sold Out!")
            } else {
                const tickets_sold = movie.tickets_sold + 1
                body = {tickets_sold}
                updateTicketCount(movieId, body);
            }
            
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
        fetch(url + id, options)
        .then(resp => resp.json())
        .then(movieData => {
            const ticketSpan = document.getElementById('ticket-num')
            renderMovie(movieData, ticketSpan);
        })
    }


    getMovie();
    listOfMovies();
})