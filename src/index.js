document.addEventListener('DOMContentLoaded', () => {
  console.log('dom is loaded')
  getFilm()
  buyTicket()
})

const baseURL = 'http://localhost:3000'
const filmsURL = 'http://localhost:3000/films/'
// GET /films/[:id] (start with /films/1)
// PATCH /films/[:id]
// GET /films (for Advanced Deliverables only)

const filmsDiv = () => document.querySelector('#films')
const posterDiv = () => document.querySelector('#poster')
const showingDiv = () => document.querySelector('#showing')

const getFilm = () => {
  fetch(filmsURL + 1)
    .then(resp => resp.json())
    .then(film => renderFilm(film))
}

const renderFilm = film => {
  const filmsDiv = document.querySelector('#films')

  const div = document.createElement('div')
  div.classList += 'film item'
  div.textContent = film.title
  console.log(filmsDiv)
  filmsDiv.appendChild(div)

  const img = document.getElementById('poster')
  img.src = film.poster

  const titleDiv = document.getElementById('title')
  titleDiv.textContent = film.title

  const runtimeDiv = document.getElementById('runtime')
  runtimeDiv.textContent = `${film.runtime} minutes`

  const filmInfoDiv = document.getElementById('film-info')
  filmInfoDiv.textContent = film.description

  const showtime = document.getElementById('showtime')
  showtime.textContent = film.showtime

  const ticketSpan = document.getElementById('ticket-num')
  ticketSpan.textContent = film.tickets_sold

  const cardDiv = titleDiv.parentElement
  cardDiv.dataset.filmId = film.id
  console.log(cardDiv)
}

const buyTicket = () => {
  // select button
  const ticketButton = document.querySelector('div.button')
  ticketButton.addEventListener('click', () => {
    // print id to test
    const cardDiv = ticketButton.closest('div.card')
    const filmId = cardDiv.dataset.filmId

    // pull out number of tickts from the dom
    const ticketString = cardDiv.querySelector('#ticket-num').textContent
    const ticketNumber = parseInt(ticketString)
    console.log(typeof ticketNumber)

    if (ticketNumber > 0) {
      makePatchRequest(filmId, ticketNumber)
    }
  })
}

const makePatchRequest = (filmId, ticketNumber) => {
  const patchRequest = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify({
      tickets_sold: ticketNumber - 1
    })
  }

  fetch(filmsURL + filmId, patchRequest)
    .then(resp => resp.json())
    .then(patchedFilm => {
      console.log(patchedFilm)
      // update the dom with response
      updateTicketNumber(patchedFilm)
    })
}

const updateTicketNumber = film => {
  if (film.tickets_sold === 0) {
    const buyButton = document.querySelector('div.button')
    buyButton.textContent = 'Sold Out'
    buyButton.classList.remove('orange')
  }
  const ticketSpan = document.querySelector('#ticket-num')
  ticketSpan.textContent = film.tickets_sold
}
