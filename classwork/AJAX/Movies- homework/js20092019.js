var page = 1;
var table;
$(document).ready(function(){
    $( ".movies-wrapper" ).sortable({
        update: function( event, ui ) {
            // do stuff
            console.log("Drop",ui);
            $(ui.item[0]).find(".cube").css("background-color",getRandomColor());
         }
     });
    $( ".movies-wrapper" ).disableSelection();
    
    $("#search_btn").on('click',function(){
        loadMovies(page);
    });
    loadMovies(page);
    $(window).scroll(function() {
        console.log($(window).scrollTop());
        //$("body").css("background-color",getRandomColor());
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            if( !$(".movies-wrapper-table").find("table").length > 0 ){
                loadMore();
            }
        }
    });
});

function loadMovies(page){
    var search = $("#search").val();

    $.ajax({
        url:"http://www.omdbapi.com",
        type:"GET",
        data:{apikey:"21af947d",s:search,page:page},
        success:function(res){
            console.log(res);
            showAlert("Success ",true,true);
            if( res.Response == "True" ){
                $(".total-result").text("Total Results: " + (page*10) + " / " + res.totalResults);
                if( $(".movies-wrapper-table") ){
                    printTable(res.Search);
                }else{
                    printCubes(res.Search);
                }
                
                
            }else{
                showAlert("Error " + res.Error,false,true);
            }
        },
        error:function(xhr){
            console.log("Error:",xhr);
            showAlert("Error " + xhr.responseText,false,true);
        }
    });
}

function showAlert(text,good_bad, show){
    if( show ){
        if( good_bad ){
            $("#alert_message").removeClass('alert-danger');
            $("#alert_message").addClass('alert-success');
        }else{
            $("#alert_message").addClass('alert-danger');
            $("#alert_message").removeClass('alert-success');
        }
        $("#alert_message").text(text);
        $("#alert_message").show();
    }else{
        $("#alert_message").text("");
        $("#alert_message").hide();
    }
}

function printCubes(movies_array){
    for( let i = 0; i < movies_array.length ; i++){
        var cube = $("<div class='col-md-4 outer-cube'></div>");
        
        var inner_cube = $("<div class='cube'></div>");
        var img_div = $(`<img src='${movies_array[i].Poster}' />`)
        var title = $(`<div class='title'>${movies_array[i].Title}</div>`);
        $(inner_cube).append(img_div).append(title);
        $(cube).append(inner_cube);
        $(".movies-wrapper").append(cube);
    }
}

function printTable(movies_array){
    if( $(".movies-wrapper-table").find("table").length > 0 ){
        table.DataTable().destroy();
        var tbody = $(".movies-wrapper-table").find("table tbody");
    }else{ // table not exist yet....
        table = $("<table class='table-dark'></table>");
        var thead = $("<thead></thead>");
        var tr = $("<tr><th>ID</th><th>Title</th><th>Poster</th><th>Year</th></tr>");
        var tbody = $("<tbody></tbody>");
        $(table).append(thead);
        $(thead).append(tr);
        $(table).append(tbody);
        $(".movies-wrapper-table").append(table);
        $( ".movies-wrapper-table tbody" ).sortable();
    }
    for( let i = 0; i < movies_array.length ; i++){
        let tr = $(`<tr><td>${movies_array[i].imdbID}</td><td>${movies_array[i].Title}</td><td><img src='${movies_array[i].Poster}' /></td><td>${movies_array[i].Year}</td></tr>`);
        $(tbody).append(tr);
    }
    table.DataTable();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
function loadMore(){
    page++;
    loadMovies(page);

}  


  
