// console.log("hello world")

let message = document.querySelector("#message")



function addMovie(event){
    
    event.preventDefault()
    let inputField = document.querySelector("input")
    let movie = document.createElement("li")

    const movieTitle = document.createElement("span")
    movieTitle.addEventListener("click", crossOffMovie)
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)

    deleteBtn.textContent = "X"
    
    
    const movieList = document.querySelector("ul")
    movieList.appendChild(movie)
    movie.appendChild(deleteBtn)
    
    inputField.value = ""
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.textContent.replace("X", " ")} Deleted!`
    revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked")) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }

    revealMessage()
}

function revealMessage() {
    setTimeout(() => {
        message.classList.add("hide")
    }, 1000)
}


const form = document.querySelector("form")
form.addEventListener("submit", addMovie)


let deleteBtn = document.createElement("button")
deleteBtn.addEventListener('click', deleteMovie)













