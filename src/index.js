const URL = "http://localhost:3000/films/"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener("DOMContentLoaded",() =>
{
  fetchFilm(3);

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
  
  showtime.innerText = film.showtime;
  filmInfo.innerText = film.description;
  runtime.innerText = film.runtime;
  title.textContent = film.title;

  updateTicketNumDiv(film,ticketNum);

  const buyTicket = document.getElementsByClassName("ui orange button")[0];
  buyTicket.addEventListener("click",e => clickHandler(e,film.tickets_sold,film.capacity,ticketNum));
}

const clickHandler = (e,sold,capacity,ticketNum) =>
{
  
  if (!!(capacity - sold))
    incrementTicketPatch(sold,ticketNum);
}

const incrementTicketPatch = (sold,ticketNum) =>
{
  console.log(film.tickets_sold);
  const filmData = {tickets_sold: sold + 1}
  console.log(filmData);
  const config = 
  {
    method: "PATCH",
    headers:
    {
      "Content-Type": 'application/json',
      "Accept": 'application/json'
    },
    body: JSON.stringify(filmData)
  };
  fetch(URL + film.id,config)
  .then(r => r.json())
  .then(filmJson => updateTicketNumDiv(filmJson,ticketNum));//filmJson => updateTicketNumDiv(filmJson,ticketNum)
}

const updateTicketNumDiv = (film,ticketNum) =>
{
  ticketNum.textContent = !!available(film) ? available(film) : '[X]';

}

const available = (film) =>
{
  return (film.capacity - film.tickets_sold);
}



