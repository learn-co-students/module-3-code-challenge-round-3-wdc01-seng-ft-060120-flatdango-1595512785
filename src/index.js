document.addEventListener('DOMContentLoaded', () => {
  console.log('dom is loaded')
  getFilms()
  buyTicket()
})

const baseURL = 'http://localhost:3000'
const filmsURL = 'http://localhost:3000/films/'

const filmsDiv = () => document.querySelector('#films')
const posterDiv = () => document.querySelector('#poster')
const showingDiv = () => document.querySelector('#showing')

const getFilms = () => {
  fetch(filmsURL)
    .then(resp => resp.json())
    .then(films => renderAllFilms(films))
}

const renderAllFilms = films => {
  films.forEach(film => renderSideMenu(film))
}

const renderSideMenu = film => {
  const menuDiv = document.getElementById('films')

  const div = document.createElement('div')
  div.classList += 'film item'
  div.textContent = film.title
  div.dataset.filmId = film.id
  menuDiv.appendChild(div)

  handleTitleFilm(film, div)
}

const handleTitleFilm = (film, div) => {
  div.addEventListener('click', () => {
    renderFilm(film)
  })
}

const renderFilm = film => {
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
      // update the dom with response
      updateTicketNumber(patchedFilm)
    })
}

const updateTicketNumber = film => {
  if (film.tickets_sold === 0) {
    const buyButton = document.querySelector('div.button')
    buyButton.textContent = 'Sold Out'
    buyButton.classList.remove('orange')

    // find its title in the menu
    const divItem = document.querySelector(`div[data-film-id="${film.id}"]`)
    divItem.style.color = 'red'

    // mark it as sold out
  }
  const ticketSpan = document.querySelector('#ticket-num')
  ticketSpan.textContent = film.tickets_sold
}
