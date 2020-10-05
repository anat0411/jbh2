$(document).ready(function() {
  // Datatables
  // https://datatables.net

  $(".btn").on("click", function() {
    // JS
    // if (document.querySelector("#img_1").style.display == 'none') {
    //     document.querySelector("#img_1").style = "display:block;";
    // } else {
    //     document.querySelector("#img_1").style = "display:none;";
    // }

    // jQuery

    // if ($("#img_1").is(":hidden")) {
    //     $("#img_1").addClass("border");
    //     $("#img_1").parent().addClass("border");
    // } else {
    //     $("#img_1").removeClass("border");
    //     $("#img_1").parent().removeClass("border");
    // }

    var css_params = {
      height: "200px",
      width: "200px",
      "background-color": "pink"
    };

    $("#img_1").toggleClass("border", $("#img_1").is(":hidden"));
    //$("#img_1").toggle(3000);
    // $(".canvas").css("height", "200px");
    // $(".canvas").css("width", "200px");
    // $(".canvas").css("background-color", "pink");
    //$(".canvas").css(css_params);
    $(".canvas").text($(".canvas").css("width"));
    //$(".canvas").slideToggle(500);

    $(".canvas").attr("id", "test_id");
    $(".canvas").prop("name", "test_name");
    // $(".col-md-12").addClass("border")

    $("div.canvas").css("background-color", "red");
    //$(".canvas").parent(".container").css("background-color", "red");
  });

  $(".canvas").on("click", function() {
    $(this).hide(1000);
    let elem = $(this);
    setTimeout(() => {
      elem.show(1000);
    }, 3000);
  });
});
