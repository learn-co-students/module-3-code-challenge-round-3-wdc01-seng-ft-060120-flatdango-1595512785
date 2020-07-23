const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener("DOMContentLoaded", () => {
fetchFilms()
    
})

function fetchFilms(){
    fetch(url)
    .then( res => res.json() )
    .then( films => renderFilms(films) )
    
}



function renderFilms(films){
 renderFilm(films[0]) 
}

function renderFilm(film) {

posterImg = document.querySelector("#poster")
posterImg.src = film.poster

 titleDiv = document.querySelector("#title")
 titleDiv.textContent = film.title

 runTimeDiv = document.querySelector("#runtime")
 runTimeDiv.textContent = `${film.runtime} minutes`

 filmInfoDiv = document.querySelector("#film-info")
 filmInfoDiv.textContent = film.description

 showTimeSpan = document.querySelector('#showtime')
 showTimeSpan.textContent = film.showtime

 ticketNum = document.querySelector('#ticket-num')
 ticketNum.textContent = parseInt(film.capacity, 10) - film.tickets_sold

 buyTicketButton = document.querySelector('#buy-button')
 console.log(ticketNum)

 buyTicketButton.addEventListener('click', (e) => decreaseTickets(film, ticketNum) )
  
}


function decreaseTickets(film, ticketNum) {
    buyTicketButton = document.querySelector('#buy-button')
    let patchRequest = {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            accept: 'application/json'
        },
        body: JSON.stringify({
            tickets_sold: film.tickets_sold -= 1
        })
    }
fetch(`${url}/${film.id}`, patchRequest)
.then( res => res.json() )
.then( updatedFilm => ticketNum.textContent -= 1 )

  //if Remaining tickets is 0 disable button and change its text to Sold OUT
// if(ticketNum.textContent = 0 ){
//     buyTicketButton.disabled = true;
//     buyTicketButton.textContent = "Sold out"
// }
}