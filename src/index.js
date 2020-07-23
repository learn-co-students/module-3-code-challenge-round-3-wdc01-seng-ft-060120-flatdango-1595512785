const url = "http://localhost:3000/films"
const FIRST_MOVIE = "http://localhost:3000/films/1"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener('DOMContentLoaded', (e) => {
console.log("DOM is Loaded")

fetchMovies()
buyTicketButton()
});

function fetchMovies(){
//fetch movies from the database
    fetch(FIRST_MOVIE)
    .then(resp => resp.json())
    .then(films => renderFirstMovie(films))
}

function renderFirstMovie(films) {
    //display movies detail by rendering it onto the page inspect the page to know 
    //where it goes. grab the div with the card class becase that is is wehre it wil be appended
    let poster = document.getElementById('poster')
    poster.src = `${films.poster}`

    let divTitle = document.querySelector('#title')
    divTitle.textContent = `${films.title}`

    let divRun = document.querySelector('#runtime')
    divRun.innerText = `${films.runtime} minutes`

    let divInfo = document.querySelector('#film-info')
    divInfo.innerText = `${films.description}`

    let showTime = document.getElementById('showtime')
    showTime.innerText = `${films.showtime}`

    let remainTickets = document.getElementById('ticket-num')
    let capacityInt = parseInt(films.capacity, 10)
    remainTickets.innerText = capacityInt - `${films.tickets_sold}`
    console.log(remainTickets)
    //equal to tickets sold - capacity
    //remainTickets.innerText = 
}
 
function buyTicketButton(){
   //Buy a ticket for a movie. The number of tickets sold for that movie should be persisted, 
//and I should be able to see the number of available tickets decreasing on the frontend.  

//grab the button and place a listener on that button when it clicks what do I want it to do?
//to decrease the number of remaining tickets by 1 so you may have to send  a patch request 
let buyTicketButton = document.querySelector('.extra content')
console.log(buyTicketButton)
}

/*See the first movie's details, including its poster, title, runtime, showtime, and available tickets
 (the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)

Buy a ticket for a movie. The number of tickets sold for that movie should be persisted, 
and I should be able to see the number of available tickets decreasing on the frontend.
I should not be able to buy a ticket if the showing is sold out.*/