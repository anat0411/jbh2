var page = 1;
var table;
$(document).ready(function() {
  $(".movies-wrapper").sortable({
    update: function(event, ui) {
      // do stuff
      console.log("Drop", ui);
      $(ui.item[0])
        .find(".cube")
        .css("background-color", getRandomColor());
    }
  });
  $(".movies-wrapper").disableSelection();

  $("#search_btn").on("click", function() {
    loadMovies(page);
  });
  loadMovies(page);
  $(window).scroll(function() {
    console.log($(window).scrollTop());
    //$("body").css("background-color",getRandomColor());
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      if (!$(".movies-wrapper-table").find("table").length > 0) {
        loadMore();
      }
    }
  });
});

function loadMovies(page) {
  var search = $("#search").val();

  $.ajax({
    url: "http://www.omdbapi.com",
    type: "GET",
    data: { apikey: "21af947d", s: search, page: page },
    success: function(res) {
      console.log(res);
      showAlert("Success ", true, true);
      if (res.Response == "True") {
        $(".total-result").text(
          "Total Results: " + page * 10 + " / " + res.totalResults
        );
        if ($(".movies-wrapper-table")) {
          printTable(res.Search);
        }
      } else {
        showAlert("Error " + res.Error, false, true);
      }
    },
    error: function(xhr) {
      console.log("Error:", xhr);
      showAlert("Error " + xhr.responseText, false, true);
    }
  });
}

function showAlert(text, good_bad, show) {
  if (show) {
    if (good_bad) {
      $("#alert_message").removeClass("alert-danger");
      $("#alert_message").addClass("alert-success");
    } else {
      $("#alert_message").addClass("alert-danger");
      $("#alert_message").removeClass("alert-success");
    }
    $("#alert_message").text(text);
    $("#alert_message").show();
  } else {
    $("#alert_message").text("");
    $("#alert_message").hide();
  }
}

function printTable(movies_array) {
  if ($(".movies-wrapper-table").find("table").length > 0) {
    table.DataTable().destroy();
    var tbody = $(".movies-wrapper-table").find("table tbody");
  } else {
    // table not exist yet....
    table = $("<table class='table-dark'></table>");
    var thead = $("<thead></thead>");
    var tr = $(
      "<tr><th>ID</th><th>Title</th><th>Poster</th><th>Year</th></tr>"
    );
    var tbody = $("<tbody></tbody>");
    $(table).append(thead);
    $(thead).append(tr);
    $(table).append(tbody);
    $(".movies-wrapper-table").append(table);
    $(".movies-wrapper-table tbody").sortable();
  }
  for (let i = 0; i < movies_array.length; i++) {
    let tr = $(
      `<tr class= "movieRow"><td>${movies_array[i].imdbID}</td><td class="movieTitle">${movies_array[i].Title}</td><td><img src='${movies_array[i].Poster}' /></td><td>${movies_array[i].Year}</td></tr>`
    );
    $(tbody).append(tr);
  }
  table.DataTable();

  this.click(function() {
    console.log("click");
    showHideCardMovieRow();
  });
  getMovieDetails(movies_array.Title);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function loadMore() {
  page++;
  loadMovies(page);
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
      let card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("invisible");
      card.classList.add("col-md-4");
      card.setAttribute("colspan", "3");

      let img = document.createElement("img");
      img.src = json_res.Poster;

      let title = document.createElement("h2");
      title.innerHTML = json_res.Title;

      let actors = document.createElement("h3");
      title.innerHTML = json_res.Actors;

      let country = document.createElement("h3");
      title.innerHTML = json_res.Country;

      let plot = document.createElement("h6");
      title.innerHTML = json_res.Plot;

      let type = document.createElement("h4");
      title.innerHTML = json_res.Type;

      let year = document.createElement("h3");
      title.innerHTML = json_res.Year;

      card.appendChild(title);
      card.appendChild(actors);
      card.appendChild(country);
      card.appendChild(plot);
      card.appendChild(type);
      card.appendChild(year);
      card.appendChild(img);

      this.appendChild(card);

      card.click(function() {
        showHideCardMovieRow(card);
      });
    },
    error: function(xhr) {
      console.log("Error: ", xhr);
    }
  });
}

function showHideCardMovieRow(card) {
  card.toggle();
  this.toggle();
}
