// window.onload = function () {
//     // document.querySelector("#add_txt_btn").addEventListener('click', function () {
//     //     AddTextToDiv();
//     // });


//     $(".btn").on('click', function () {
//         AddTextToDiv();
//     });
// }

$(document).ready(function () {
    $(".btn").on('click', function () {
        AddTextToDiv();
    });
});

function AddTextToDiv() {
    let val_from_input = $("#text").val(); // document.querySelector("#text").value
    $(".wrapper").append("Enterd Input " + val_from_input);
    $("#text").val(`Test ${val_from_input} Value`);
    let js_elem = $("#text"); //document.querySelector("#text")

    //console.log(js_elem.innerHTML); undefined
    //document.querySelector("#text").value = `Test ${val_from_input} Value`;


    let html = $(".wrapper").html(); // document.querySelector(".wrapper").innerHTML;
    console.log(html);
    $(".wrapper").html("Text In HTML");

    let html_tag = document.createElement("div");
    html_tag.innerHTML = "Created Tag!";
    $(".wrapper").append(html_tag);

    let html_tag_jquery = $("<div></div>");
    $(html_tag_jquery).attr("id", "Saar");//set  id attribute
    $(html_tag_jquery).attr("bla", "bla");//set  bla attribute
    console.log($(html_tag_jquery).attr("id"));//read the id attribute
    $(html_tag_jquery).html("Created Tag Jquery!")
    $(".wrapper").append(html_tag_jquery);
    PrintAllButtonsText();
}

function PrintAllButtonsText() {
    $(".btn").each(function (index) {
        console.log(index, $(this).html());
    });
}