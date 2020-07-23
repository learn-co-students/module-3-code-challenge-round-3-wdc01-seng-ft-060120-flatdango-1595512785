document.addEventListener('DOMContentLoaded', () => {
const url = "http://localhost:3000/films"

const getFilms = () => {
    fetch(url)
    .then(response => response.json())
    .then(films => {
        console.log(films)
    
    films.forEach(film => {

    let movieTitle = document.getElementById('title')
    let movieRuntime = document.getElementById('runtime')
    let showtime = document.getElementById('showtime')
    let tickets = document.getElementById('ticket-num')
    tickets_remaining = (film.capacity - film.tickets_sold)
    let poster = document.getElementById('poster')
    //for tickets available, be mindful of capacity and tickets sold

    movieTitle.innerText = film.title
    movieRuntime.innerText = `${film.runtime} minutes`
    showtime.innerText = film.showtime 
    //tickets.innerText = `${film.capacity} - ${film.tickets_sold}`
    tickets.innerText = tickets_remaining
})
}); 

}

getFilms()



const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")


})