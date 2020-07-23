const url = "http://localhost:3000/films/"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")
const ticketNum = () => document.querySelector("#ticket-num")

document.addEventListener("DOMContentLoaded", (e) => {

    const button = document.querySelector("#buy-ticket")

    button.addEventListener("click", (e) => {
        let id = e.target.parentElement.parentElement.parentElement.dataset.id
        let ticketsSold = e.target.parentElement.parentElement.parentElement.dataset.tickets
        if(ticketNum().innerText > 0){
            updateTicketsSold(id, ticketsSold)
        }
        else{
            alert("Sorry, this movie is sold out :(")
        }

    })

    let id = 2
    getMovie(id)


})

const updateTicketsSold = (id, ticketsSold) => {
    const newTicketsSold = (1 + parseInt(ticketsSold, 10));
    const movieObj = {
        "tickets_sold": newTicketsSold
    };
    const configMovie = {
        method: "PATCH",

        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },

        body: JSON.stringify(movieObj)
    };

    fetch(`${url}${id}`, configMovie)
    .then(resp => resp.json())
    .then(movie => {
        renderMovie(movie)
    });
}

const getMovie = (id) => {
    fetch(`${url}${id}`)
    .then(resp => resp.json())
    .then(movie => {
        renderMovie(movie)
    })
}

const renderMovie = (movie) => {
    const title = () => document.querySelector("#title");
    const runtime = () => document.querySelector("#runtime")
    const description = () => document.querySelector("#film-info")
    const showtime = () => document.querySelector("#showtime")
    posterDiv().src =  movie.poster;
    showingDiv().dataset.id = movie.id
    showingDiv().dataset.tickets = movie.tickets_sold
    title().innerText = movie.title;
    runtime().innerText = `${movie.runtime} minutes`;
    description().innerText = movie.description
    showtime().innerText = movie.showtime
    ticketNum().innerText = (movie.capacity - movie.tickets_sold)
}



// Buy a ticket for a movie. The number of tickets sold for that movie should be persisted, and I should be able to see the number of available tickets decreasing on the frontend.

// -- add event listener to ".ui orange button" DONE 
// -- pass off to a function pass it the movie ID(at least)
// -- function should add 1 to tickets sold and call renderMovie to pessimistically render

/* See the first movie's details, including its poster, title, runtime, showtime, and available tickets (the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)
Buy a ticket for a movie. The number of tickets sold for that movie should be persisted, and I should be able to see the number of available tickets decreasing on the frontend.
I should not be able to buy a ticket if the showing is sold out. */