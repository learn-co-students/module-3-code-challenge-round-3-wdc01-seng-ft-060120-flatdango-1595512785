document.addEventListener("DOMContentLoaded", () => {
const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")
const url1 = "http://localhost:3000/films/1"


const fetchMovie = () => {
    fetch(url1)
    .then(resp => resp.json())
    .then(movie => renderMovie(movie) )
}

fetchMovie();

function renderMovie(movie){ 
    
    let divCard = showingDiv().firstElementChild
    let divTitle = divCard.getElementsByTagName('div')[0]
    let divRunTime = divCard.getElementsByTagName('div')[1]
    let divDescription = divCard.getElementsByTagName('div')[2].firstElementChild
    let filmInfo = divDescription.getElementsByTagName('div')[0]
    let divExtraContent = divCard.getElementsByTagName('div')[3]
    console.log(divDescription)

    posterDiv().src = movie.poster
    divTitle.innerText = movie.title;   
    divRunTime.innerText = movie.runtime;
    filmInfo.innerText = movie.description;
}


})