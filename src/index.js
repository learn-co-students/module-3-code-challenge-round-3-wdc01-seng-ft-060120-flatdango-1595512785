const url = "http://localhost:3000/films/"
const filmsDiv = document.querySelector("#films")
const posterDiv = document.querySelector("#poster")
const showingDiv = document.querySelector("#showing")

document.addEventListener("DOMContentLoaded", (e) => {
	//first deliverable:
	//on /films/[:id] load, get film data from server
	function getFilmData(id){
		return fetch(url + id)
					.then(resp => resp.json())
					.then(json => displayFilm(json));
	}
	
	//find or create DOM elements as needed
	function displayFilm(filmObject){
		const titleDiv = document.querySelector(`#showing #title`)
		const runtimeDiv = document.querySelector(`#showing #runtime`);
		const filmInfoDiv = document.querySelector(`#showing .description #film-info`);
		const showtimeDiv = document.querySelector(`#showing .description #showtime`);
		const numTicketsDiv = document.querySelector(`#showing .description #ticket-num`);
		const ticketsSold = filmObject['tickets_sold'];
		const capacity = filmObject['capacity'];
		const ticketsRemaining = capacity - ticketsSold;

		posterDiv.setAttribute('src', filmObject['poster']);
		titleDiv.textContent = filmObject['title'];
		runtimeDiv.textContent = filmObject['runtime'] + ` minutes`;
		showtimeDiv.textContent = filmObject['showtime'];
		filmInfoDiv.textContent = filmObject['description'];

		if(ticketsRemaining > 0){
			numTicketsDiv.textContent = ticketsRemaining;
		}
		
	}
	//set data in DOM elements using data from server


	//second deliverable:
	//set event listener for the 'buy ticket' button
	//if possible, patch number of tickets on server
	//if not possible, alert the user the movie is sold out
	//page should say 'sold out' as soon as last ticket is sold

	getFilmData(1);
})
