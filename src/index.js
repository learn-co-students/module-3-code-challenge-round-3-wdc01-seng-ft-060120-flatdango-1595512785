const URL = "http://localhost:3000/films/"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener("DOMContentLoaded",() =>
{
  fetchFilm(1);

});

const fetchFilm = (id) =>
{
  fetch(URL + id)
  .then(r => r.json())
  .then(film => showFilm(film));
}

const showFilm = (film) =>
{
  const title = document.getElementById("title");
  const runtime = document.getElementById("runtime");
  const filmInfo = document.getElementById("film-info");
  const showtime = document.getElementById("showtime");
  const ticketNum = document.getElementById("ticket-num");

  const available = film.capacity - film.tickets_sold;
  ticketNum.innerText = available === 0 ? "[X]" : available;
  showtime.innerText = film.showtime;
  filmInfo.innerText = film.description;
  runtime.innerText = film.runtime;
  title.textContent = film.title;

  const buyTicket = document.getElementsByClassName("ui orange button")[0];
  buyTicket.addEventListener("click",clickHandler(film,ticketNum));
}

const clickHandler = (film,ticketNum) =>
{
  console.log(film);
}