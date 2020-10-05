// 01 2 postdd literals objects

const posts = [
  { title: "Post One", body: "This is the Text" },
  { title: "Post Two", body: "This is the Text" }
];

function createPost(post, callbackFunc) {
  setTimeout(() => {
    posts.push(post);
    callbackFunc();
  }, 3000);
}

function createPostPromise(post) {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (error) {
        reject("ERROR in createPostPromise");
      } else {
        resolve("created");
      }
    }, 3000);
  });
}
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    console.log(output);
    //Display to UI All posts items
  }, 1000);
}

createPost({ title: "Post Three", body: "text" }, getPosts); //not calling the func, sending the templete to createPosts and there it will be called

createPostPromise({ title: "Post Four", body: "text bla bla" })
  .then(getPosts)
  .catch(err => console.log(err));

fetch("https://jsonplaceholder.typicode.com/todos/1").then(res =>
  console.log(res.json())
);
