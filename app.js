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

    if(inp.value===""){
        alert("Please enter a movie name")
    }
    else{
        // Step 1: Get value of input
        inp = document.querySelector("input");
        let userTypedText = inp.value;
        let exist = false
        let listItem1 = myMovieList.children
        for(let i=0; i<listItem1.length;i++){
            let substr1 = listItem1[i].innerHTML
           
            if(String(substr1.toLocaleLowerCase())===String(userTypedText.toLocaleLowerCase())){
                exist=true
                
            }
        }

        if(exist===false){
            // Step 2: Create an empty <li></li>
            let li = document.createElement("li"); // <li></li>

            // Step 3: Prepare the text we will insert INTO that li ^...example: Harry Potter
            let textToInsert = document.createTextNode(userTypedText);

            // Step 4: Insert text into li
            // <li>Harry Potter </li>
            li.appendChild(textToInsert);
            
            // Step 5: Insert the <li>Harry Potter</li> INTO the <ul>
            myMovieList.appendChild(li);
        }
        addHistory()
       // Step 6: Call the clearInput function to clear the input field
        clearInput();
    }
}

let addHistory = () => {
    // This function is executed in the previous function to add the movie to the history list.
    let inp = document.querySelector("input");
    let myMovieList = document.querySelector("ul");
    let movieHist = document.querySelector("#movieHistoryCard");
    let userTypedText = inp.value;
    //let textToInsert = document.createTextNode(userTypedText)
    
    //I realize now I could let the relevant nodes be arguments in this function,
    //Will change that later.

    if(movieHist.querySelector("ul") === null){
        let movie = document.createElement("il");
        let histList = document.createElement("ul")
       
        histList.classList.add("list-group")

        let textToInsert = document.createTextNode(`${userTypedText} ${1}`)
        movie.appendChild(textToInsert);
        histList.appendChild(movie)
        movieHist.appendChild(histList);
    }
    else{
        let presence = false
        let histList = movieHist.querySelector("ul")
        let listItems2 = histList.children
        for(let i = 0; i < listItems2.length; i++){
            let substr2 =listItems2[i].innerHTML.split(" ")
            
            let entryCount = parseInt(substr2.pop())
            substr2=substr2.join(" ")
    
            if(String(substr2).toLocaleLowerCase()==userTypedText.toLocaleLowerCase()){
                //Some code that adds to the count section
                
                entryCount++
                listItems2[i].innerHTML=`${substr2} ${entryCount}`
                presence=true
            }
        }
        if(presence==false){
            let movie = document.createElement("il");
            let textToInsert = document.createTextNode(`${userTypedText} ${1}`)
            movie.appendChild(textToInsert);
            histList.appendChild(movie)
        }
    }
}

let filterList = () =>{
    let filtBox = document.querySelector("#filter").value
    let myMovieList = document.querySelector("ul").children;
    if(myMovieList!==null){
        if(filtBox!==""){
            for(let i=0;i<myMovieList.length;i++){
                if(myMovieList[i].innerHTML.includes(filtBox)){
                    myMovieList[i].style.visibility="visible"
                }
                else{
                    myMovieList[i].style.visibility="hidden"
                }

            }
        }
    }

}

document.querySelector("#filter").addEventListener("input",filterList)