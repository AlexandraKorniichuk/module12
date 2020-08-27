// promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = Math.random() * (10 - 1) * 1;
    if (num > 3) {
      resolve("back success");
    } else {
      reject("back error");
    }
  }, 0); //  задает асинхронность
});
console.dir(promise);
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(console.log("treatment anyway"));
