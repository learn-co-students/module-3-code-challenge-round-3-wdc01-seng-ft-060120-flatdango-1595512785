const base_url = "http://localhost:3000/films/"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener('DOMContentLoaded', start)

const fetchMovie = (filmID = 1) => {
    fetch(`${base_url}/${filmID}`)
    .then(resp => resp.json())
    .then(movie => renderMovie(movie))
    .catch(error => console.log(error))
}

const renderMovie = (movie) => {
    let poster = document.querySelector('img#poster');
    poster.src = `${movie.poster}`;

    document.querySelector('#title').textContent = movie.title;
    document.querySelector('#runtime').textContent = `${movie.runtime}` + " minutes";
    document.querySelector('#showtime').textContent = movie.showtime;
    document.querySelector('#film-info').textContent = movie.description;

    let ticketsLeft = document.querySelector('#ticket-num');
    ticketsLeft.textContent = parseInt(movie.capacity - `${movie.tickets_sold}`);

    let buyTicketDiv = document.getElementsByClassName('ui orange button')[0];

    let numTicketsLeft = parseInt(ticketsLeft.textContent);
    if(numTicketsLeft === 0){
        buyTicketDiv.innerHTML = 'SOLD OUT';
        buyTicketDiv.addEventListener('click', () => {
            window.alert("Sorry, no tickets left")
        })
    } else {
        buyTicketDiv.addEventListener('click', () => {
        buyTicket(movie, event)
    })
    }
}

const buyTicket = (movie, event) => {
    event.preventDefault();
    // console.log(event.target, movie)

    let ticketData = {
        "tickets_sold": parseInt(`${movie.tickets_sold}`) + 1
    }

    fetch(`${base_url}/${movie.id}`, {
         method : 'PATCH',
         headers: {'content-type' : 'application/json', 'accept' : 'application/json'},
         body : JSON.stringify(ticketData)
    })
    .then(response => response.json())
    .then(movie => renderMovie(movie));

}

const fetchMovies = () => {
    fetch(base_url)
    .then(resp => resp.json())
    .then(movies => displayMovies(movies))
    .catch(error => console.log(error))
}

const displayMovies = (movies) => {
    movies.forEach(movie => {
        let filmDiv = document.querySelector('#films')
        let li = document.createElement('li');
        li.innerHTML = movie.title;
        //Uncomment below for advanced deliverable
        // li.addEventListener('click', () => {
        //     featureFilm(movie, li)
        // })

        filmDiv.append(li);
    });
}

const featureFilm = (movie) => {
    let poster = document.querySelector('img#poster');
    poster.src = `${movie.poster}`;

    document.querySelector('#title').textContent = movie.title;
    document.querySelector('#runtime').textContent = `${movie.runtime}` + " minutes";
    document.querySelector('#showtime').textContent = movie.showtime;
    document.querySelector('#film-info').textContent = movie.description;

    let ticketsLeft = document.querySelector('#ticket-num');
    ticketsLeft.textContent = parseInt(movie.capacity - `${movie.tickets_sold}`);

    let buyTicketDiv = document.getElementsByClassName('ui orange button')[0];

    let numTicketsLeft = parseInt(ticketsLeft.textContent);
    if(numTicketsLeft === 0){
        buyTicketDiv.innerHTML = 'SOLD OUT';
        buyTicketDiv.addEventListener('click', () => {
            window.alert("Sorry, no tickets left")
        })
    } else {
        buyTicketDiv.addEventListener('click', () => {
        buyTicket(movie, event)
    })
    }
}


function start(){
    fetchMovie();
    fetchMovies(); //ADVANCED DELIVERABLES
}