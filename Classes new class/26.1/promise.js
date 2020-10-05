let p = new Promise(function(resolve, reject) {});

function PromiseFunc() {
  let p2 = new Promise((resolve, reject) => {
    //<0.5 Pali
    //>0.5 Not Pali
    let pali = Math.random() < 0.5;
    setTimeout(() => {
      if (pali) resolve("Pali, Win! The coin is less then 0.5, " + pali);
      else reject("Not Pali, Lost! The coin is more then 0.5, " + pali);
    }, 5000);
  });
  return p2;
}

for (let i = 0; i < 5; i++) {
  PromiseFunc()
    .then(resolvedParam => {
      console.log(i + resolvedParam);
    })
    .catch(rejectParam => {
      console.log(i + rejectParam);
    });
}
