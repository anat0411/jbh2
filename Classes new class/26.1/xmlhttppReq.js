function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("dataContent").innerHTML = this.responseText;
      let jsonData = JSON.parse(this.responseText);
      console.log(jsonData);
    }
  };
  xhttp.open("GET", "https://reqres.in/api/users?page=2", true);
  xhttp.send();
}

function loadFetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      console.log(response.ok);
      if (!response.ok) return Promise.reject("ERROR");
      else return response.json();
    })
    .then(json => console.log(json));
}

function getItemByID() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
      console.log(response.ok);
      if (!response.ok) return Promise.reject("ERROR");
      else return response.json();
    })
    .then(response => {
      let userPosts = [];
      userPosts = response.map(post => {
        post.userId == id;
      });
    });
}
