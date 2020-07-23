document.addEventListener('DOMContentLoaded', () => {
const url = "http://localhost:3000/films"

const getFilms = () => {
    fetch(url)
    .then(res => res.json())
    .then(films => {
        console.log(films)
    })
}

const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")


})


// const renderFilms = films => {
//     const filmList = () => document.getElementsByClassName('film item')[1]
//     filmList.innerHTML = ''

//     films.forEach(film => {
//         showFilm(film, filmList)
    
// });

// }

// const showFilm = (film, filmList) => {
//     const filmListing = document.createElement('tr')
//     filmListing.dataset.id = film.id 
    
//     filmList.innerHTML = `${film.title}`
