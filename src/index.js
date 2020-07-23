const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

getMovie(1)

function getMovie(id){
    fetch(`${url}/${id}`).then(response=>response.json()).then(movie=>renderMovie(movie))
}

function purchaseTicket(movie){
    let tickets_sold = movie.tickets_sold + 1

    if tickets_sold <= movie
    fetch(`${url}/${movie.id}`,{
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
        body:JSON.stringify({ tickets_sold })
    })
        .then(response=>response.json())
        .then(movie=>renderMovie(movie))
}

function renderMovie(movie){
    titleDiv = document.getElementsByClassName('film item')[1]
    titleDiv.textContent = movie.title

    document.getElementById('title').textContent = movie.title
    document.getElementById('film-info').textContent = movie.description
    document.getElementById('runtime').textContent = `${movie.runtime} minutes`
    document.getElementById('showtime').textContent = movie.showtime
    document.getElementById('poster').src = movie.poster
    document.getElementById('ticket-num').textContent = `${movie.capacity}`-`${movie.tickets_sold}`
    document.getElementsByClassName('ui orange button')[0].addEventListener('click',event=>{
        purchaseTicket(movie,)
    })

}

