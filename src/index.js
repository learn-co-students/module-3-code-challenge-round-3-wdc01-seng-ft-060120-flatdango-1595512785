const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener("DOMContentLoaded", () => {
  fetchMovie(`${url}/1`)
  fetchMovieList(url)
})

function fetchMovieList(url) {
  fetch(url)
  .then(response => response.json())
  .then(movies => displayMovieList(movies))
}

function displayMovieList(movies) {
  movies.forEach(movie => listMovie(movie))
}

function listMovie(movie) {
  const movieList = document.getElementById('films')
  const filmDiv = document.createElement('div')
  filmDiv.classList += 'film'
  filmDiv.classList += ' item'
  if(movie.tickets_sold === parseInt(movie.capacity)) {
    filmDiv.classList += ' sold-out'
  }
  filmDiv.textContent = movie.title
  console.log(movieList)
  movieList.append(filmDiv)
}

function fetchMovie(url) {
  fetch(url)
  .then(response => response.json())
  .then(movie => displayMovie(movie))
}

function displayMovie(movie) {
  const card = document.querySelector('.card')
  card.dataset.id = movie.id
  const title = document.getElementById('title')
  const runtime = document.getElementById('runtime')
  const filmInfo = document.getElementById('film-info')
  const showtime = document.getElementById('showtime')
  const ticketNum = document.getElementById('ticket-num')
  const poster = document.getElementById('poster')
  title.innerText = movie.title 
  runtime.innerText = movie.runtime
  filmInfo.innerText = movie.description
  showtime.innerText = movie.showtime
  ticketNum.dataset.capacity = parseInt(movie.capacity)
  ticketNum.dataset.sold = movie.tickets_sold
  ticketNum.innerText = `${parseInt(movie.capacity) - movie.tickets_sold}`
  poster.src = movie.poster
}

document.addEventListener('click', (e) => {
  if(e.target.innerText === "Buy Ticket") {
    const movieToUpdate = e.target.closest('.card')
    buyTicket(movieToUpdate)
  }
});

function buyTicket(movieCard) {
  const ticketData = movieCard.querySelector('#ticket-num')
  const sold = ticketData.dataset.sold;
  const capacity = ticketData.dataset.capacity;
  if(sold < capacity) {
    const movieObj = {
      tickets_sold: parseInt(sold) + 1
    }
    const patchRequest = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(movieObj)
    }
    fetch(`${url}/${movieCard.dataset.id}`, patchRequest)
    .then(resp => resp.json())
    .then(movie => displayMovie(movie))
  } else {
    alert("Sorry, that showing is sold out!")
  }
}