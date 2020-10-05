window.onload = function () {
    console.log("1");
    console.log("2");
    console.log("3");
    getData();
    console.log("4");
    console.log("5");
}


// Async Function
function getData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log("State Changed:", this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            console.log("Get Data");
            console.log(this.responseText);
            var result = JSON.parse(this.responseText);
            console.log(result);
        }
        if (this.status >= 400 && this.status < 500) {
            console.log("Not Found");
            //window.location.href = "https://www.google.com";
        }
    };
    xhttp.open("GET", "http://www.omdbapi.com/?s="+"one"+"&apikey=21af947d", true);
    //xhttp.open("GET", "http://omdbapi.com/bla", true);
    //xhttp.open("GET", "http://www.omdbapi.com", true);

    xhttp.send();
}
