const BASEURL = "http://localhost:3000/films/"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()

    fetchMovies()
})

let renderMovies = (movies) => {
    movies.forEach(movie => renderMovie(movie))
}

let renderMovie = (movie) => {
    let movieImgTag = document.getElementById('poster')
    movieImgTag.src = movie.poster

    let movieTitle = document.getElementById('title')
    movieTitle.innerText = movie.title

    let movieRunTime = document.getElementById('runtime')
    movieRunTime.innerText = `${movie.runtime} Minutes`

    let movieDescription = document.getElementById('film-info')
    movieDescription.innerText = movie.description

    let movieShowtime = document.getElementById('showtime')
    movieShowtime.innerText = movie.showtime 

    let movieTicketNum = document.getElementById('ticket-num')
    let remainingTicketNum = parseInt(movie.capacity, 10) - movie.tickets_sold
    movieTicketNum.innerText = remainingTicketNum

    let buyTicketButton = document.querySelector('div.button')
    buyTicketButton.addEventListener('click', (e) => {
        e.preventDefault()

        if (remainingTicketNum === 0) {
            alert("Sorry, this showing is sold out!")
        } else if (remainingTicketNum >= 1) {
            buyTicket(movie, movieTicketNum)
        }
    })
    
}

let buyTicket = (movie, movieTicketNum) => {
    let newTicketsSold = movie.tickets_sold + 1
    console.log(newTicketsSold)

    let editTicketNum = {
        'tickets_sold': newTicketsSold
    }

    let options = {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'accept': 'applicaton/json'
        },
        body: JSON.stringify(editTicketNum)
    }
    
    fetch(BASEURL + movie.id, options)
    .then(response => response.json())
    .then(movie => renderMovie(movie))
}

let fetchMovies = () => {
    fetch(BASEURL + 1)
    .then(response => response.json())
    .then(movie => renderMovie(movie))
}
