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

    get

    // const routine = document.getElementById('routine')
    // routine.innerText = `${movie.routine} minutes`

    // console.log(routine)
    
    

    // const divTitle = document.createElement('div')
    // divTitle.innerText = movie.title
    // console.log(divTitle)
    // divClass.append(divTitle)
    
    // console.log(divClass)
}
