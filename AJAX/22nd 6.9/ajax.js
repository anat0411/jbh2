window.onload = function() {
  getMovie();
};

// function for the specific movie
function getMovie() {
  let search = document.querySelector(".getMovie").value;
  if (search.length < 3) {
    alert("Search Phrase too Short...");
    return;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log("State Changed:", this.readyState);
    if (this.readyState == 4 && this.status == 200) {
      console.log("Get Data");
      console.log(this.responseText);
      var result = JSON.parse(this.responseText);
      console.log(result);
      var resultFinal = result.Search;
      console.log(resultFinal);
      for (let i = 0; i < resultFinal.length; i++) {
        createCard(resultFinal[i].Title, resultFinal[i].Poster);
      }
    }
  };
  xhttp.open(
    "GET",
    `http://www.omdbapi.com/?s=${search}&apikey=21af947d`,
    true
  );
  xhttp.send();
}

// function for creating the cards
function createCard(title, poster) {
  divCard = document.createElement("div");
  divCard.classList.add("col-md-4", "mb-3", "mb-3", "card");
  document.getElementById("rowNewElem").appendChild(divCard);

  divCardTop = document.createElement("div");
  divCard.appendChild(divCardTop);
  divCardTitle = document.createElement("div");
  divCard.appendChild(divCardTitle);
  divCardTitle.classList.add("text-center", "h2", "mb-3", "mt-3", "card-title");

  divCard.addEventListener("click", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var movieInfo = JSON.parse(this.responseText);
        console.log(movieInfo);
        movieInfoPopup(
          console.log(movieInfo.Title),
          movieInfo.Title,
          movieInfo.Year,
          movieInfo.Rated,
          movieInfo.Released,
          movieInfo.Genre,
          movieInfo.Poster
        );
      }
    };
    xhttp.open(
      "GET",
      `http://www.omdbapi.com/?t=${title}&apikey=21af947d`,
      true
    );
    xhttp.send();
  });
  divCardBottom = document.createElement("div");
  divCard.appendChild(divCardBottom);

  divCardTitle.innerHTML = title;
  img = document.createElement("img");
  img.classList.add("rounded", "img-thumbnail", "image");
  img.src = poster;
  divCardBottom.appendChild(img);
}

// function for the search buttton
function searchMovie() {
  document.querySelector(".rowNewElem").innerHTML = "";
  getMovie();
}

// create the popup of the movie's info
function movieInfoPopup(title, year, rated, released, genre, poster) {
  var cardTotal = document.createElement("div");
  var titleCard = document.createElement("div");
  var yearCard = document.createElement("div");
  var ratedCard = document.createElement("div");
  var realesedCard = document.createElement("div");
  var genreCard = document.createElement("div");
  var imageCard = document.createElement("img");

  cardTotal.appendChild(titleCard);
  cardTotal.appendChild(yearCard);
  cardTotal.appendChild(ratedCard);
  cardTotal.appendChild(realesedCard);
  cardTotal.appendChild(genreCard);
  cardTotal.appendChild(imageCard);

  title = titleCard.innerHTML;
  year = yearCard.innerHTML;
  rated = ratedCard.innerHTML;
  released = realesedCard.innerHTML;
  genre = genreCard.innerHTML;
  poster = imageCard.src;

  alert(
    title +
      " " +
      year +
      " " +
      " " +
      rated +
      " " +
      released +
      " " +
      " " +
      genre +
      " " +
      poster
  );
}
