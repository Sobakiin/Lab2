// Add DOM selectors to target input and UL movie list

// Example of a simple function that clears the input after a user types something in
let clearInput = () => {
    let inp = document.querySelector("input");
    inp.value = "";
}

let clearMovies = () => {
    // To delete all children of the <ul></ul> (meaning all <li>'s)..we can wipe out the <ul>'s innerHTML
    let myMovieList = document.querySelector("ul");
    myMovieList.innerHTML = '';
}



// This function is executed when the user clicks [ADD MOVIE] button.
let addMovie = () => {
    let inp = document.querySelector("input");
    let myMovieList = document.querySelector("ul");

    if(inp.value==""){
        alert("Please enter a movie name")
    }
    else{
        // Step 1: Get value of input
        let userTypedText = inp.value;
        // Step 2: Create an empty <li></li>
        let li = document.createElement("li"); // <li></li>

        // Step 3: Prepare the text we will insert INTO that li ^...example: Harry Potter
        let textToInsert = document.createTextNode(userTypedText);

        // Step 4: Insert text into li
        // <li>Harry Potter </li>
        li.appendChild(textToInsert);

        addHistory()
        // Step 5: Insert the <li>Harry Potter</li> INTO the <ul>
        myMovieList.appendChild(li);

        // Step 6: Call the clearInput function to clear the input field
        clearInput();
    }
}

let addHistory = () => {
    // This function is executed in the previous function to add the movie to the history list.
    let inp = document.querySelector("input");
    let myMovieList = document.querySelector("ul");
    let movieHist = document.querySelector("#movieHistoryCard")//.querySelectorAll("li");
    let userTypedText = inp.value;
    let textToInsert = document.createTextNode(userTypedText)
    //I realize now I could let the relevant nodes be arguments in this function,
    //Will change that later.

    if(movieHist == null){
    let movie = document.createElement("il");
    movie.appendChild(textToInsert);
    movieHist.appendChild(movie);
    }
    else{
        let presence = false
        for(let i = 0; i < movieHist.length; i++){
            
            if(movieHist[i].contains(textToInsert)){
                //Some code that adds to the count section
                presence=true
            }
        }
        if(presence==false){
            let movie = document.createElement("il");
            movie.appendChild(textToInsert);
            movieHist.appendChild(movie)
        }
    }
}