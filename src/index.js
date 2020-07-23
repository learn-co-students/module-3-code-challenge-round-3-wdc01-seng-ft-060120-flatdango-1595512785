const url = "http://localhost:3000/films"
const FIRST_MOVIE = "http://localhost:3000/films/1"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener('DOMContentLoaded', (e) => {
console.log("DOM is Loaded")

fetchMovies()
});

function fetchMovies(){
//fetch movies from the database
    fetch(FIRST_MOVIE)
    .then(resp => resp.json())
    .then(firstMovie => renderFirstMovie(firstMovie))
}

function renderFirstMovie(firstMovie) {
    //display movies detail by rendering it onto the page inspect the page to know 
    //where it goes. grab the div with the card class becase that is is wehre it wil be appended
    let img = document.getElementById('poster')
    img.src = films.poster

    let divTitle = document.getElementById('title')
    divTitle = `${films.title}`

    let divRun = document.getElementById('runtime')
    divRun = `${films.runtime} minutes`

    

}


/*See the first movie's details, including its poster, title, runtime, showtime, and available tickets
 (the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)

Buy a ticket for a movie. The number of tickets sold for that movie should be persisted, 
and I should be able to see the number of available tickets decreasing on the frontend.
I should not be able to buy a ticket if the showing is sold out.*/