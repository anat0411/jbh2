$(document).ready(function() {
  getMovies();
});

function getMovies() {
  $.ajax({
    url: "http://www.omdbapi.com",
    type: "GET",
    data: { s: "one", apikey: "21af947d", page: 101 },
    success: function(result) {
      console.log(result);
      $("#total_results").text(result.totalResults);
      printMoviesArray(result.Search);
    },
    error: function(xhr) {
      console.log("Error: ", xhr);
    }
  });
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

  card.addEventListener("click", function() {
    getMovieDetails(movie.Title);
  });

  card.appendChild(title);
  card.appendChild(img);

  document.querySelector(".movies-wrapper").appendChild(card);
}

function getMovieDetails(title) {
  $.ajax({
    url: "http://www.omdbapi.com",
    type: "GET",
    data: {
      t: title,
      apikey: "21af947d"
    },
    success: function(json_res) {
      console.log(json_res);
      $("#exampleModal").modal();
      $("#exampleModalLabel").text(title);
      $(".modal-body").html("");
      $(".modal-body").append(`<img src='${json_res.Poster}'>`);
      $(".modal-body").append(
        `<div><label>Actors</label>: ${json_res.Actors}</div>`
      );
      $(".modal-body").append(
        `<div><label>Country</label>: ${json_res.Country}</div>`
      );
      $(".modal-body").append(
        `<div><label>Plot</label>: ${json_res.Plot}</div>`
      );
      $(".modal-body").append(
        `<div><label>Type</label>: ${json_res.Type}</div>`
      );
      $(".modal-body").append(
        `<div><label>Year</label>: ${json_res.Year}</div>`
      );
      $(".modal-body").append(
        `<div><label>Rating</label>: ${getStars(json_res.imdbRating)}</div>`
      );
    },
    error: function(xhr) {
      console.log("Error: ", xhr);
    }
  });
}

function getStars(num) {
  var num = parseInt(num);
  var html = "";
  for (let i = 0; i < num; i++) {
    html += "<i class='fa fa-star'></i>";
  }
  return html;
}
