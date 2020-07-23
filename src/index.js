const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")
const id = 2

document.addEventListener("DOMContentLoaded", () => {
    getAMovie();
    // buyATicket();
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

    const button = document.querySelectorAll("div")[19].children[0]
   
    buyATicket(movie, button, ticketsLeft, movieObj)
    

    const movieObj = {
        "title": title.innerText,
        "runtime": runTime.innerText,
        "capacity": movie.capacity,
        "showtime": showTime.innerText,
        "tickets_sold": movie.tickets_sold,
        "description": movie.description,
        "poster": poster.src
    }
    console.log(movieObj)
}

    const buyATicket = (movie, button, movieObj, ticketsLeft) => {
        button.addEventListener('click', () => {
            if(ticketsLeft >= 1){
            movie.tickets_sold = movie.tickets_sold + 1;
            updateInfo(movie, movieObj)
            } else {
                console.log("no more tick")
            }
        })
    }


const updateInfo = (movieObj) => {

    
    fetch(`${url}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(movieObj),
        headers: {
            'Content-type': 'application/json',
            Accept: "application/json"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

