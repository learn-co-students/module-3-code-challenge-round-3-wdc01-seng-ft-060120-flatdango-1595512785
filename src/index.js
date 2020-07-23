const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")
const id = 1

document.addEventListener("DOMContentLoaded", () => {
    getAMovie();
})

const getAMovie = () => {
    fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(movie => {renderMovie(movie)})
}

const renderMovie = (movie) => {
    const poster = document.getElementById('poster')
    poster.src = movie.poster

    const title = document.getElementById('title')
    title.innerText = movie.title

    const runTime = document.getElementById('runtime')
    runTime.innerText = movie.runtime + " minutes"

    const showTime = document.getElementById('showtime')
    showTime.innerText = movie.showtime

    const ticketsLeft = document.getElementById('ticket-num')
    const totalTickets = parseInt(movie.capacity, 10)
    ticketsLeft.innerText = totalTickets - movie.tickets_sold
    console.log(ticketsLeft)
}

