const url = "http://localhost:3000/films/"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener("DOMContentLoaded", (e) => {

    // get movie. Done!
    // add movie poster to poster div, Done!
    // add movie details to showing div (need to traverse showing div to get the movies)
    // 
    let id = 1
    getMovie(id)


})

const getMovie = (id) => {
    fetch(`${url}${id}`)
    .then(resp => resp.json())
    .then(movie => {
        renderMovie(movie)
        // console.log(movie, posterDiv().src)
    })
}

const renderMovie = (movie) => {
    const title = () => document.querySelector("#title");
    const runtime = () => document.querySelector("#runtime")
    const description = () => document.querySelector(".description")
    console.log(movie)
    posterDiv().src =  movie.poster;
    title().innerText = movie.title;
    runtime().innerText = `${movie.runtime} minutes`;
    description().innerText = movie.description

}





/* See the first movie's details, including its poster, title, runtime, showtime, and available tickets (the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)
Buy a ticket for a movie. The number of tickets sold for that movie should be persisted, and I should be able to see the number of available tickets decreasing on the frontend.
I should not be able to buy a ticket if the showing is sold out. */