const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")


let id = 1

/* See the first movie's details, 
including its poster, title, runtime, showtime, 
and available tickets 
(the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)
bbbsabn */

// make get request to render the first movie with id = 1


    fetch(`${url}/${id}`)
    .then(resp => resp.json())
    .then(movie => renderMovie(movie))



function renderMovie(movie){
    const divClass = document.querySelector('.card')
    const title = document.getElementById('title')
    title.innerText = movie.title

    const img = document.getElementById('poster')
    img.src = movie.poster
    
    const show = document.getElementById("showtime")
    show.innerText = movie.showtime
    
    const runtine = document.getElementById('runtine')
    runtime.innerText = `${movie.runtime} minutes`
    
    const descrip = document.getElementById('film-info')
    descrip.innerText = movie.description

    const ticket = document.getElementById('ticket-num')
    let capacity = `${movie.capacity}`
    let ticketSold = `${movie.tickets_sold}`
    let remaining = capacity - ticketSold
    
    ticket.innerText = remaining
   
    //add event listener on buy ticket
    const buyTicket = document.getElementsByClassName("ui orange button")

    buyTicket.addEventListener('submit', function(e){
        const ticket = document.getElementById('ticket-num')
        let capacity = `${movie.capacity}`
        let ticketSold = `${movie.tickets_sold}`
        let remaining = capacity - ticketSold
        function numberOfTicket(capacity,ticketSold, remaining){
            remaining = capacity - ticketSold
        }
        numberOfTicket()
    })
    

    
    
    

    
}
