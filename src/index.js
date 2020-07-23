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

    getMovies()


})

const getMovies = () => {
    fetch(url)
    .then(resp => resp.json())
    .then(movies => {
        filmsDiv().innerHTML = ""
        movies.forEach(renderMovieLi)
    })
}

const renderMovieLi = (movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.dataset.id = movie.id
    movieDiv.innerText = movie.title;
    movieDiv.classList.add ("film");
    movieDiv.classList.add ("item");
    if (movie.capacity == movie.tickets_sold){
        movieDiv.classList.add ("sold-out");
    }
    filmsDiv().appendChild(movieDiv)
    movieDiv.addEventListener("click", (e) => {
        renderMovie(movie)
    })

}

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
        if(parseInt(movie.capacity) === parseInt(movie.tickets_sold)){
            let movieDiv = document.querySelector(`#films [data-id="${movie.id}"]`)
            movieDiv.classList.add("sold-out")
        }
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

// As a user, I can:

// See a menu of all movies on the left side of the page.

// - fetch request to /base url and for each loop to display each one as a list item
// DONE!!!


// Click on a movie in the menu to replace the currently displayed movie's details with the new movie's details.

// add an event listener to filmsDiv, event target should let me traverse to get films id, then run a fetch request to get that film
// Buy a ticket for any movie and update the tickets sold for that movie, not just the first. LOL,  DIDNT EVEN NEED TO DO THAT BECAUSE I ADDED IT DIRECTLY TO THE INITIAL RENDER!!!
// Indicate in the menu which movies are sold out. 

// just add "sold-out" to the moviediv's classlist should do it, but I need to find the moviediv, good thing I set dataset.id on all the movieDivs, so I should just be able to run a query selector for them this should all be done ont he button