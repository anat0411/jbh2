$(function() {
  $("#searchForm").submit(function(e) {
    event.preventDefault();
    var userSearchVal = $("#searchText").val();
    console.log(userSearchVal);
    LoadMovies(userSearchVal);
  });
});

function LoadMovies(searchText) {
  $.ajax({
    type: "get", //For
    url: "http://www.omdbapi.com/?apikey=cd4c31d&s=" + searchText,
    dataType: "json", //Format
    //Callback Function for 200 Success response
    success: function(data) {
      console.log(data);
      if (data.Response == "False") {
        alert(data.Error);
        return;
      }
      alert("responsed OK!!!!" + data.totalResults);

      let movies = data.Search;
      let output = "";
      $.each(movies, (index, movie) => {
        console.log(movie.Title + index + movie.imdbID);
        console.log(`
          <a
            onclick="movieSelected('${movie.imdbID}')"
            class="btn btn-primary"
            href="moviesDetails.html"
          >
            Movie Details
          </a>
       `);
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src=${movie.Poster}></img>
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="moviesDetails.html">Movie Details</a>      
             </div>
          </div>
          `;
      });
      $("#movies").html(output);
    },

    error: function(xhr, ajaxOptions, thrownError) {
      //alert(xhr.status);
      alert(thrownError);
    }
  });
}

function movieSelected(movieID) {
  sessionStorage.setItem("movieID", movieID);
  window.location = "movieDetails.html";
  return false; // if there any events on the screen, stop them and do the thing in the func
}

function getMovieDetails() {
  let movieID = sessionStorage.getItem("movieID");
  $.ajax({
    type: "get",
    url: "http://www.omdbapi.com/?apikey=cd4c31d&i=" + movieID,
    dataType: "json",
    success: function(response) {
      console.log(response);
      console.log(response.Title);
      let output;

      $("#movie").html(`
            <div class="row">
              <div class="col-md-4">
                <img src="${response.Poster}" class="thumbnail">
              </div>
              <div class="col-md-8">
                <h2>${response.Title}</h2>
                <ul class="list-group">
                  <li class="list-group-item"><strong>Genre:</strong> ${response.Genre}</li>
                  <li class="list-group-item"><strong>Released:</strong> ${response.Released}</li>
                  <li class="list-group-item"><strong>Rated:</strong> ${response.Rated}</li>
                  <li class="list-group-item"><strong>IMDB Rating:</strong> ${response.imdbRating}</li>
                  <li class="list-group-item"><strong>Director:</strong> ${response.Director}</li>
                  <li class="list-group-item"><strong>Writer:</strong> ${response.Writer}</li>
                  <li class="list-group-item"><strong>Actors:</strong> ${response.Actors}</li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="well">
                <h3>Plot</h3>
                ${response.Plot}
                <hr>
                <a href="http://imdb.com/title/${response.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                <a href="index.html" class="btn btn-default">Go Back To Search</a>
              </div>
            </div>
          `);

      console.log(output);
    },
    error: function(xhr, ajaxOptions, thrownError) {
      //alert(xhr.status);
      alert(thrownError);
    }
  });
}
