const url = "http://localhost:3000/films"
const firstFilmUrl = `${url}/1`
const filmsDiv = () => document.querySelector("#films")
// const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")
const movieTickets = document.querySelector('#ticket-num')

document.addEventListener('DOMContentLoaded', () => {
    fetchFilm(firstFilmUrl)
})

const fetchFilm = url => {
    fetch(url)
    .then(response => response.json())
    .then(film => renderFilm(film))
}

const renderFilm = film => {
    const filmCard = document.querySelector(".card")
    const filmImg = document.querySelector('img')
    const buyTix = document.querySelector('#movie-bttn')
    filmCard.dataset.id = film.id


    const movieTitle = document.querySelector('#title')
    movieTitle.textContent = film.title

    const movieRunTime = document.querySelector('#runtime')
    movieRunTime.textContent = film.runtime

    const movieDesc = document.querySelector('#film-info')
    movieDesc.textContent = film.description

    const movieShowTime = document.querySelector('#showtime')
    movieShowTime.textContent = film.showtime

    movieTickets.textContent = parseInt(film.capacity) - film.tickets_sold

    filmImg.src = film.poster

    handleClicks(film, buyTix)
}

const handleClicks = (film, buyTix) => {

    buyTix.addEventListener('click', function(e){
        
        // if(movieTickets.textContent > 0)
        
        const newTixSold = film.tickets_sold + 1
        const availableTix = parseInt(film.capacity) - newTixSold        

        fetch(firstFilmUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                tickets_sold: newTixSold
            })

        // else(
        //     buyTix.setAttribute('disabled', false)
        // )

        })
    })

    

}