
const url = "http://localhost:3000/films/"
let page = 1;
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener('DOMContentLoaded', () => {

    getFilms()
})

function getFilms() { 
    fetch(url)
    .then(response => response.json())
    .then(films => { films
        renderFilms(films)
    })
}
function renderFilms(films) {
    films.forEach(film => {
        renderFilm(film)
    }) 
}

function renderFilm(film){
    const div = document.querySelector('#poster')
    div.src = film.poster
    divTitle = document.querySelector('.title')
    divTitle.innerText = film.title
    divTime = document.querySelector('.meta')
    divTime.innerHTML = film.runtime
    divDes = document.querySelector('#film-info')
    divDes.innerHTML = film.description
    divShowTime = document.querySelector('#showtime')
    divShowTime.innerHTML = film.showtime

    divTicket = document.querySelector('#ticket-num')
    divTicket.innerHTML = film.tickets_sold
    // console.log(divTicket)

    const orange = document.querySelector('.orange')
    console.log(orange)
    const button = document.createElement('button')
    orange.innerHTML = button
    button.addEventListener('click', (e) => buyTicket(e, button))
}

function buyTicket(e, button) {
    fetch(url + dog.id, {
        method:'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            console.log()
        })
    })
    .then()
}


