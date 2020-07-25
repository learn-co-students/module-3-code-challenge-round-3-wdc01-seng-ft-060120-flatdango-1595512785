document.addEventListener("DOMContentLoaded", () => {
const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")
const url1 = "http://localhost:3000/films/1"
const divCard = showingDiv().firstElementChild
const divTitle = divCard.getElementsByTagName('div')[0]
const divRunTime = divCard.getElementsByTagName('div')[1]
const divDescription = divCard.getElementsByTagName('div')[2].firstElementChild
const filmInfo = divDescription.getElementsByTagName('div')[0]
const showtime = document.getElementById("showtime")
const ticketNum = document.getElementById("ticket-num")
const ticketString = ticketNum.innerText
const divExtraContent = divCard.getElementsByTagName('div')[3]
const buyButton = document.getElementById("orangeButton")
const ticketing = parseInt(ticketString, 10)


const fetchMovie = () => {
    fetch(url1)
    .then(resp => resp.json())
    .then(movie => renderMovie(movie) )
}

fetchMovie();

function renderMovie(movie){ 
    
    
    posterDiv().src = movie.poster
    divTitle.innerText = movie.title;   
    divRunTime.innerText = movie.runtime;
    filmInfo.innerText = movie.description;
    showtime.innerText = movie.showtime;
    ticketNum.innerText = movie.capacity;
   
    
    if (movie.capacity <= 0) {
        
        buyButton.style.display = "none";
    } 

}
buyButton.addEventListener('click', (e) => { 
    
    const ticketNum = document.getElementById("ticket-num")
    // let ticketvalue =  ticketNum.innerText -= 1
    
   
 

    const options = {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
            },
             body: JSON.stringify({capacity:  ticketNum.innerText -= 1})
    }

    fetch(url1 , options)
        .then(resp => resp.json())
        .then(json => renderMovie(json))  
 
    
})

})