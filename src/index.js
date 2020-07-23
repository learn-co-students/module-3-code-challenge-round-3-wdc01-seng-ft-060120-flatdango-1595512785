const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener("DOMContentLoaded", () => {
    fetchMovies()
   
});

function fetchMovies() {
    fetch(url)
    .then(response => response.json())
    .then(movies => renderMovie(movies[0]))
};

// function renderAllMovies(movies) {
//     movies.forEach(movie => renderMovie(movie))
// };

function renderMovie(movie) {
    //render poster
    let posterImg = document.getElementById("poster")
    posterImg.src = movie.poster
    //render title
    let movieTitle = document.getElementById("title")
    movieTitle.textContent = movie.title
    //render runtime
    let movieRuntime = document.getElementById("runtime")
    movieRuntime.textContent = `${movie.runtime} minutes`
    //render description
    let movieDescr = document.getElementById("film-info")
    movieDescr.textContent = movie.description
    //render showtime
    let movieShowtime = document.getElementById("showtime")
    movieShowtime.textContent = movie.showtime
    //render available tickets
    let movieTicketsAvailable = document.getElementById("ticket-num")
    movieTicketsAvailable.textContent = `${parseInt(movie.capacity) - movie.tickets_sold} remaining tickets`

    document.addEventListener("click", (e) => {
        if(e.target.innerText === "Buy Ticket")
            buyTicket(e.target, movie)
    })
};

function buyTicket(target, movie) {
    console.log(target)
    console.log(movie)
}


    
    
    
    // let movieCard = e.target.parentNode.parentNode
    // let ticketsRemaining = movieCard.childNodes[5].childNodes[1].childNodes[5]
    // tickets_sold should increase with each click
    // console.log(ticketsRemaining.textContent)



