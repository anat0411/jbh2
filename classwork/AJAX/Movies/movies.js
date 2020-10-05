window.onload = function () {
    getMovies();
}


// Async Function
function getMovies() {
    let search = document.querySelector('#search').value;
    if (search.length < 3) {
        alert("Search Phrase too Short...");
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log("State Changed:", this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            
            var json_res = JSON.parse(this.responseText);
            console.log(json_res );
            let movie_arr = json_res.Search;
            printMoviesArray(movie_arr);
        }
        if (this.status >= 400 && this.status < 500) {
            console.log("Not Found");
        }
    };
    xhttp.open("GET", `http://www.omdbapi.com/?s=${search}&apikey=21af947d`, true);
    xhttp.send();
}

function printMoviesArray(movie_arr) {
    document.querySelector(".movies-wrapper").innerHTML = "";
    for (let i = 0; i < movie_arr.length; i++) {
        console.log(movie_arr[i]);
        addMovieCardToWrapper(movie_arr[i]);
    }
}


function addMovieCardToWrapper(movie) {

    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-md-4");

    let img = document.createElement("img");
    img.src = movie.Poster;

    let title = document.createElement("h3");
    title.innerHTML = movie.Title;

    card.addEventListener('click',function(){
        getMovieDetails(movie.Title);
    });

    card.appendChild(title);
    card.appendChild(img);

    document.querySelector(".movies-wrapper").appendChild(card);
}

function getMovieDetails(title){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log("State Changed:", this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            
            var json_res = JSON.parse(this.responseText);
            console.log(json_res );
            $("#exampleModal").modal();
            $("#exampleModalLabel").text(title);
            $(".modal-body").html('');
            $(".modal-body").append(`<img src='${json_res.Poster}'>`);
            $(".modal-body").append(`<div><label>Actors</label>: ${json_res.Actors}</div>`);
            $(".modal-body").append(`<div><label>Country</label>: ${json_res.Country}</div>`);
            $(".modal-body").append(`<div><label>Plot</label>: ${json_res.Plot}</div>`);
            $(".modal-body").append(`<div><label>Type</label>: ${json_res.Type}</div>`);
            $(".modal-body").append(`<div><label>Year</label>: ${json_res.Year}</div>`);
            $(".modal-body").append(`<div><label>Rating</label>: ${getStars(json_res.imdbRating)}</div>`);
        }
        if (this.status >= 400 && this.status < 500) {
            console.log("Not Found");
        }
    };
    xhttp.open("GET", `http://www.omdbapi.com/?t=${title}&apikey=21af947d`, true);
    xhttp.send();
}

function getStars(num){
    var num = parseInt(num);
    var html = "";
    for( let i = 0; i < num ; i++){
        html += "<i class='fa fa-star'></i>";
    }
    return html;
}