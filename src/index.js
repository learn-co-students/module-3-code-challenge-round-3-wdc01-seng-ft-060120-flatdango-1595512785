const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

getMovie(1)
getMovies()

function getMovie(id){
    fetch(`${url}/${id}`).then(response=>response.json()).then(movie=>renderMovie(movie))
}

function getMovies(){
    fetch(url).then(response=>response.json()).then(movies=>renderMovies(movies))
}

function purchaseTicket(movie,remainingTickets){
    if (remainingTickets > 0) {
        let tickets_sold = movie.tickets_sold + 1

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
}

function renderMovies(movies){
    titlesDiv = document.getElementsByClassName('film item')[1]
    titlesDiv.textContent = ""
    movies.forEach(movie=>{
        let titleHeading = document.createElement('div')
        titleHeading.innerHTML = `<hr> ${movie.title}`
        titleHeading.classList += 'film item'
        titlesDiv.append(titleHeading)
        if (movie.capacity - movie.tickets_sold === 0){
            titleHeading.classList = 'sold-out film item'
        }

        titleHeading.addEventListener('click',event=>{
            getMovie(movie.id)
            if (movie.capacity - movie.tickets_sold === 0){
                titleHeading.classList = 'sold-out film item'
            }
        })
    })
}

function renderMovie(movie){

    document.getElementById('title').textContent = movie.title
    document.getElementById('film-info').textContent = movie.description
    document.getElementById('runtime').textContent = `${movie.runtime} minutes`
    document.getElementById('showtime').textContent = movie.showtime
    document.getElementById('poster').src = movie.poster
    let remainingTickets = document.getElementById('ticket-num').textContent = `${movie.capacity}`-`${movie.tickets_sold}`
    document.getElementsByClassName('ui orange button')[0].addEventListener('click',event=>{
        purchaseTicket(movie,remainingTickets)
    })

}

