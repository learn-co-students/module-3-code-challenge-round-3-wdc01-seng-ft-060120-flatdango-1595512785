const BASEURL = "http://localhost:3000/films/"
const filmsDiv = document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()

    // fetchFirstMovie()
    fetchAllMovies()
})

let renderMovies = (movies) => {
    renderMovie(movies[0])
    filmsDiv.innerHTML = ""
    movies.forEach(movie => renderMovieList(movie))
}

let renderMovieList = (movie) => {
    let filmDiv = document.createElement('div')
    filmDiv.classList += 'film item'
    filmsDiv.appendChild(filmDiv) 

    filmDiv.innerText = movie.title.toUpperCase()
    filmDiv.dataset.id = movie.id
    filmDiv.addEventListener('click', (e) => {
        renderMovie(movie)
    })
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
    buyTicketButton.dataset.id = movie.id
    
    if (remainingTicketNum === 0 ) {
        let buttonDiv = document.querySelector('.extra')
        buttonDiv.innerHTML = `<div class="ui sold-out button">Sold Out</div>`
    } else if (remainingTicketNum >= 1) {
        buyTicketButton.addEventListener('click', (e) => {
            e.preventDefault()
                
            if (remainingTicketNum >= 2) {
                buyTicket(movie, movieTicketNum, buyTicketButton)
            } else if (remainingTicketNum = 1) {
                buyTicket(movie, movieTicketNum, buyTicketButton)
                let buttonDiv = document.querySelector('.extra')
                buttonDiv.innerHTML = `<div class="ui sold-out button">Sold Out</div>`
            }
        })
    }
    
    
}

let buyTicket = (movie, movieTicketNum, buyTicketButton) => {
    let newTicketsSold = movie.tickets_sold + 1

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
    
    fetch(BASEURL + buyTicketButton.dataset.id, options)
    .then(response => response.json())
    .then(movie => renderMovie(movie))
}

let fetchFirstMovie = () => {
    fetch(BASEURL + 1)
    .then(response => response.json())
    .then(movie => renderMovie(movie))
}

let fetchAllMovies = () => {
    fetch(BASEURL)
    .then(response => response.json())
    .then(movies => renderMovies(movies))
}
