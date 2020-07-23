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
		const buyTicketButton = document.querySelector(`#showing .extra .button`);
		const ticketsSold = filmObject['tickets_sold'];
		const capacity = filmObject['capacity'];
		const ticketsRemaining = capacity - ticketsSold;

		posterDiv.setAttribute('src', filmObject['poster']);
		titleDiv.textContent = filmObject['title'];
		runtimeDiv.textContent = filmObject['runtime'] + ` minutes`;
		showtimeDiv.textContent = filmObject['showtime'];
		filmInfoDiv.textContent = filmObject['description'];
		numTicketsDiv.textContent = ticketsRemaining;

		if(ticketsRemaining > 0){
			buyTicketButton.addEventListener('click', () => { 
				sellTicket(filmObject['id'], ticketsSold + 1)
			})
		}
		else{
			buyTicketButton.textContent = 'Sold Out';
		}

	}
	//set data in DOM elements using data from server


	//second deliverable:
	//set event listener for the 'buy ticket' button
	function sellTicket(id, newTicketNumber){
		console.log(id)
		console.log(newTicketNumber)
		fetch(url + id, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({
				tickets_sold: newTicketNumber
			})
		})
			.then(resp => resp.json())
			.then(json => displayFilm(json))
	}

	
	//if possible, patch number of tickets on server
	//if not possible, alert the user the movie is sold out
	//page should say 'sold out' as soon as last ticket is sold
	
	//advanced deliverable: movie list
	//get list div
	function getMovieList(){
		
		
		fetch(url)
		.then(resp => resp.json())
		.then(json => displayMovieList(json))
	}

	function displayMovieList(movieList){
		const listDiv = document.querySelector(`#films .film`);
		const moviesUl = document.createElement('ul');

		listDiv.append(moviesUl);

		for(let movie of movieList){
			const titleLi = document.createElement('li');

			titleLi.textContent = movie['title'];
			moviesUl.append(titleLi);
			
		}
	}
	//populate with movies from server
	//link to movie display page
	//indicate sold out

	getFilmData(1);
	getMovieList();
})
