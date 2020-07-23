const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener("DOMContentLoaded", () => {
  fetchMovie(`${url}/1`)
})

function fetchMovie(url) {
  fetch(url)
  .then(response => response.json())
  .then(movie => displayMovie(movie))
}

function displayMovie(movie) {
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
  ticketNum.innerText = `${parseInt(movie.capacity) - movie.tickets_sold}`
  poster.src = movie.poster
}