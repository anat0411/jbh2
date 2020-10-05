function loadData(url, successCallBack) {
  var xttp = new XMLHttpRequest();
  xttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = this.responseText;
      successCallBack(data);
    }
  };
  xttp.open("GET", url, true);
  xttp.send();
}

async function loadTodosData() {
  //read our JSON
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let user = await response.json();
  console.log(user);
}

loadData("https://jsonplaceholder.typicode.com/todos", data => {
  let todoData = JSON.parse(data);
  console.log(todoData);
  displayCards(todoData);
});

function displayCards(todoData) {}

loadTodosData().then(dataArr => {
  console.log(dataArr);
});
