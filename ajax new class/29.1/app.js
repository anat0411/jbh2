let todos = [];
let user1 = [];
let ids = [];

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(json => {
    console.log(json);
    todos = json;

    user1 = todos.filter(todo => todo.userId == 1 && todo.completed == true);
    console.log(user1);

    ids = user1.map(todo => {
      return "[" + todo.id + " , " + todo.title + "]";
    });
    console.log(ids);

    let combined = todos
      .filter(todo => todo.userId && todo.completed == true)
      .map(todo => "[" + todo.id + " , " + todo.title + "]");
    console.log(combined);

    let idsData = user1.map(todo => todo.id);
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    let sum = idsData.reduce(reducer, 0); // 0 is the first value
    console.log(sum);
  });
